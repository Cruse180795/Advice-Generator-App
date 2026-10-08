import AdviceCard from "./components/AdviceCard";
import { useState, useEffect } from "react";

interface Slip {
  id: number;
  advice: string;
}

async function getAdviceFromSlipAPI(signal?: AbortSignal): Promise<Slip> {
  const response = await fetch(`https://api.adviceslip.com/advice?t=${Date.now()}`, { signal });
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  const data: { slip: Slip } = await response.json();
  return data.slip;
}

export default function App() {
  const [slip, setSlip] = useState<Slip | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAdvice = async (signal?: AbortSignal) => {
    setIsLoading(true);
    setError(null);
    try {
      setSlip(await getAdviceFromSlipAPI(signal));
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      if (!signal?.aborted) setIsLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    getAdviceFromSlipAPI(controller.signal)
      .then(setSlip)
      .catch((err) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : "Something went wrong");
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <main className="flex flex-col min-h-dvh items-center justify-center px-4 gap-y-18">
      <AdviceCard
        adviceId={slip?.id}
        adviceText={slip?.advice}
        onClick={() => fetchAdvice()}
        isLoading={isLoading}
        error={error}
      />
      <p className="text-green-300 text-center text-13">
        Created by Ryan Cruse - Frontend Mentor Challenge
      </p>
    </main>
  );
}

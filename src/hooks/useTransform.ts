'use client'
import { useEffect, useState, useRef } from "react";
import { getCldImageUrl } from "next-cloudinary";

type UseTransformState = {
  state: "idle" | "loading" | "error" | "success";
  url: string | null;
  error: Error | null;
};

type TransformOptions = {
  publicId: string;
  transformations: object;
};

export default function useTransform({ publicId, transformations }: TransformOptions) {
  const [transformState, setTransformState] = useState<UseTransformState>({
    state: "idle",
    url: null,
    error: null,
  });

  const hasTransformed = useRef(false); 

  useEffect(() => {
    if (hasTransformed.current) return;

    async function transformImage() {
      try {
        console.log('Cargando');
        setTransformState({
          state: "loading",
          url: null,
          error: null,
        });

        console.log('Generando URL');
        const url = getCldImageUrl({
          src: publicId,
          ...transformations,
        });

        if (url) {
          setTransformState({
            url,
            state: "success",
            error: null,
          });
          hasTransformed.current = true; // Marca que ya se hizo la transformación
        } else {
          throw new Error("Transformación fallida");
        }
      } catch (error) {
        setTransformState({
          url: null,
          state: "error",
          error: error as Error,
        });
      }
    }

    if (publicId && !hasTransformed.current) {
      transformImage();
    }
  }, [publicId, transformations]);

  return transformState;
}

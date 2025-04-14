"use client";

import { useEffect, useState } from "react";
import Grid from "./grid";
import Tag from "./tag";
import { useRouter } from "next/navigation";
import metadata from "./metadata.json";

export default function Home() {
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [activeOrientations, setActiveOrientation] = useState([false, false]);
  const [secretInput, setSecretInput] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (secretInput.toString() === [0, 0, 1, 3, 2, -1, -3, 4].toString()) {
      router.push("/secret");
    }
  }, [secretInput]);

  return (
    <>
      <header className="m-4 text-center space-y-4">
        <h1 className="font-display text-5xl">photography</h1>
        {/* FIX mobile view, tags too wide */}
        <div className="space-x-2 flex justify-center">
          <div className="hidden lg:block space-x-2">
            {metadata
              .map((data) => data.name)
              .map((name, i) => (
                <Tag
                  key={name}
                  onClick={(on) => {
                    const newInput = [...secretInput];
                    newInput.push((on ? 1 : -1) * i);
                    setSecretInput(newInput);

                    const newTags = new Set(activeTags);
                    if (on) {
                      newTags.add(name);
                    } else {
                      newTags.delete(name);
                    }
                    setActiveTags(newTags);
                  }}
                  name={name}
                />
              ))}
          </div>
          <Tag
            onClick={(on) => {
              const newOrientations = [...activeOrientations];
              newOrientations[0] = on;
              newOrientations[1] = false;
              setActiveOrientation(newOrientations);
            }}
            // disabled={activeOrientations[1]}
            pressed={activeOrientations[0]}
            name={"horizontal"}
          />
          <Tag
            onClick={(on) => {
              const newOrientations = [...activeOrientations];
              newOrientations[1] = on;
              newOrientations[0] = false;
              setActiveOrientation(newOrientations);
            }}
            pressed={activeOrientations[1]}
            // disabled={activeOrientations[0]}
            name={"vertical"}
          />
        </div>
      </header>
      <main>
        <Grid tags={activeTags} orientations={activeOrientations} />
      </main>
    </>
  );
}

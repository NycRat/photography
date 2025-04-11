"use client";

import { useState } from "react";
import Grid from "./grid";
import Tag from "./tag";

export default function Home() {
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [activeOrientations, setActiveOrientation] = useState([false, false]);

  return (
    <>
      <header className="m-4 text-center space-y-4">
        <h1 className="font-display text-5xl">photography</h1>
        {/* FIX mobile view, tags too wide */}
        <div className="space-x-2 flex justify-center">
          {["nature", "steveston", "centro", "seagull", "lansdowne"].map(
            (name) => (
              <Tag
                key={name}
                onClick={(on) => {
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
            ),
          )}
          <Tag
            onClick={(on) => {
              const newOrientations = [...activeOrientations];
              newOrientations[0] = on;
              setActiveOrientation(newOrientations);
            }}
            name={"horizontal"}
          />
          <Tag
            onClick={(on) => {
              const newOrientations = [...activeOrientations];
              newOrientations[1] = on;
              setActiveOrientation(newOrientations);
            }}
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

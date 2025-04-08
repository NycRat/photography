import Grid from "./grid";
import Tag from "./tag";

export default function Home() {
  return (
    <>
      <header className="m-4 text-center space-y-4">
        <h1 className="font-display text-5xl">photography</h1>
        <div className="space-x-2">
          <Tag name="steveston" />
          <Tag name="richmond.nature.park" />
          <Tag name="vertical" />
          <Tag name="horizontal" />
        </div>
      </header>
      <main>
        <Grid />
      </main>
    </>
  );
}

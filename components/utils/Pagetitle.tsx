export default function Pagetitle({ title, desc }: { title: string, desc: string}) {
  return (
    <div className="px-24 py-16 bg-slate-300">
      <h1 className="text-5xl font-bold leading-normal">{ title }</h1>
      <p className="text-slate-500">{ desc }</p>
    </div>
  );
}

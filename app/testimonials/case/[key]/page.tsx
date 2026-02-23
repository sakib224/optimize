export default async function TestimonialCasePage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  await params;
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <h1 className="text-2xl">Hello world</h1>
    </div>
  );
}

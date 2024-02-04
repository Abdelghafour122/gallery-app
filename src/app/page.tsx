import Footer from "@/components/Footer";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="flat" radius="sm">
        Click
      </Button>
      <Footer />
    </main>
  );
}

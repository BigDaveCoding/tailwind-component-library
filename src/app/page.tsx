import Image from "next/image";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
        <p>hi</p>
        <Button variant="primitive">
            Button
        </Button>
        <Button variant={"simple"} >
            Button
        </Button>
        <Button variant={"rounded"} >
            Button
        </Button>
        <Button variant={"outline"} >
            Button
        </Button>
        <Button variant={"bordered"} >
            Button
        </Button>
        <Button variant={"3d"} >
            Button
        </Button>
    </>
  );
}

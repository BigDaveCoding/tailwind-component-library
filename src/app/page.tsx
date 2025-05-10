import Image from "next/image";
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";

export default function Home() {
  return (
    <>
        <p>hi</p>
        <div className={"flex gap-2 m-2"}>
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
            <Button variant={"elevated"} >
                Button
            </Button>
            <ButtonGroup />
            <Button variant={"download"} >
                Download
            </Button>
        </div>
    </>
  );
}

// app/programs/page.tsx
import ProgramPage from "@/components/programs/ProgramPage";
import { rehabilitationData } from "@/libs/programs-data";
import Navbar from "../../components/layout/navbar";

export default function Page() {
  return;
  <>
    <ProgramPage data={rehabilitationData} />;
  </>;
}

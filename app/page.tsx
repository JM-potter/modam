import dynamic from "next/dynamic";

// 빌드 오류를 막기 위해 dynamic import 사용
const ModamMainPage = dynamic(() => import("./ModamMainPage"), { ssr: false });

export default function Page() {
  return <ModamMainPage />;
}

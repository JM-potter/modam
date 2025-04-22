import dynamic from "next/dynamic";

// 서버 사이드 렌더링 중 Calendar 에러를 피하기 위해 dynamic import 사용
const ModamMainPage = dynamic(() => import("./ModamMainPage"), { ssr: false });

export default function Page() {
  return <ModamMainPage />;
}

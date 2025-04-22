// modam/app/page.tsx
import ModamMainPage from "./ModamMainPage";

export default function Page() {
  return <ModamMainPage />;
}
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

const fruitKits = [
  {
    id: "kit1",
    name: "모담 1인 과일 키트",
    price: 8900,
    image: "/images/fruit-kit-1.jpg",
    description: "혼자 사는 대학생을 위한 당일 신선 컷과일 키트!",
  },
  {
    id: "kit2",
    name: "모담 시험 응원 키트",
    price: 9900,
    image: "/images/fruit-kit-2.jpg",
    description: "시험기간 집중력 높여주는 과일 구성!",
  },
];

export default function ModamMainPage() {
  const [selectedKit, setSelectedKit] = useState(fruitKits[0]);
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState<Date | undefined>(undefined);
  const [paymentDone, setPaymentDone] = useState(false);

  const handleDeposit = () => {
    if (!pickupLocation || !pickupDate) {
      alert("수령 장소와 날짜를 선택해주세요.");
      return;
    }
    setPaymentDone(true);
  };

  return (
    <div className="min-h-screen bg-[#f9fcf8] text-gray-800">
      {/* Hero Section */}
      <div className="bg-[#d7f3e3] py-12 px-6 text-center">
        <h1 className="text-4xl font-bold text-[#2e7d32] mb-4">모담</h1>
        <p className="text-lg max-w-xl mx-auto">대학생을 위한 건강한 하루 한 상자, 지금 만나보세요 🍎🍌🍓</p>
        <Image src="/images/hero-fruits.jpg" alt="과일 이미지" width={800} height={400} className="mx-auto mt-6 rounded-xl shadow-lg max-h-72 object-cover" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">🥝 키트를 선택하세요</h2>

        {/* 제품 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {fruitKits.map((kit) => (
            <Card
              key={kit.id}
              className={`cursor-pointer hover:shadow-xl transition border-2 ${selectedKit.id === kit.id ? "border-green-500" : "border-transparent"}`}
              onClick={() => setSelectedKit(kit)}
            >
              <CardContent className="p-4">
                <Image
                  src={kit.image}
                  alt={kit.name}
                  width={600}
                  height={300}
                  className="w-full h-44 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-1">{kit.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{kit.description}</p>
                <p className="text-green-700 font-bold">₩{kit.price.toLocaleString()}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 수령 위치 선택 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">📍 수령 장소</h3>
          <Select onValueChange={setPickupLocation}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="수령 장소 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="미래혁신관">미래혁신관</SelectItem>
              <SelectItem value="글로벌 경상관">글로벌 경상관</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* 수령 날짜 선택 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">📅 수령 날짜</h3>
          <div className="border rounded-lg p-4">
            <Calendar mode="single" selected={pickupDate} onSelect={setPickupDate} className="rounded-md border" />
          </div>
        </div>

        {/* 계약금 결제 버튼 */}
        <Button className="w-full bg-[#43a047] text-white hover:bg-[#388e3c] text-lg py-6" onClick={handleDeposit}>
          계약금 ₩1,000 결제하기
        </Button>

        {/* 결제 완료 메시지 */}
        {paymentDone && (
          <div className="mt-8 text-green-700 text-lg font-semibold text-center">
            ✅ 계약금 결제가 완료되었습니다!<br />
            수령 장소: <strong>{pickupLocation}</strong><br />
            수령 날짜: <strong>{pickupDate?.toLocaleDateString()}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

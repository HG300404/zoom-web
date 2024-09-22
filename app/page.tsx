import CallNotification from "@/components/CallNotification";
import ListOnlineUsers from "@/components/ListOnlineUsers";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ListOnlineUsers/>
      <CallNotification/>
    </div>
  );
}

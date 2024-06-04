import React from "react";

export default function Loading() {
  return (
    <div className="fixed flex justify-center items-center h-screen w-screen bg-black/70 z-30">
      <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin border-blue-500"/>
    </div>
  );
}

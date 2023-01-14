import React from "react";

const ToastMessage = () => {
  return (
    <div class="w-1/5 h-8 top-4 bg-green-500 relative rounded-md mx-auto animate-bounce">
      <span class="w-full text-white absolute left-0 font-sans top-0.5">this is a message</span>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          class="w-5 h-5 fill-white stroke-white absolute right-1 top-1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default ToastMessage;

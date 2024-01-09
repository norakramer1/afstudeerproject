import React from "react";

const ShareButton = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Nodig je vrienden uit",
          text: "Kom naar dit evenement met mij!",
          url: "https://example.comhttps://afstudeerproject-omega.vercel.app/signup",
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback behavior for browsers that don't support Web Share API
      // You can implement your own sharing functionality or show a share dialog
      alert("Je kunt niet delen vanuit deze browser");
    }
  };

  return (
    <button className="onboarding-start copy" onClick={handleShare}>
      Nodig je vrienden uit
    </button>
  );
};

export default ShareButton;

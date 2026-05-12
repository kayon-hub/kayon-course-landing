/**
 * Kayon Course Landing Page
 * Design Philosophy: Luxury & Elegance
 * - Premium black and gold aesthetic
 * - Glassmorphism CTA button with translucent effect
 * - Cinematic presentation with golden light effects
 * - Full-screen immersive experience
 */

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      {/* Main Container - Responsive Image Display */}
      <div className="w-full max-w-2xl px-4 sm:px-6 lg:px-8">
        <img
          src="https://manus-storage.s3.ap-southeast-1.amazonaws.com/manus-storage/kayon_dm_with_cta_e7796263.png"
          alt="Kayon Studio - Every Soul is an Artist"
          className="w-full h-auto object-contain drop-shadow-2xl"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black/80 p-6 flex items-center justify-center">
      <p className="text-white">
        &copy;{year} CreativePhoto. All Rights Reserved.
      </p>
    </footer>
  );
}

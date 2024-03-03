export default function Footer() {
  const currentDay = new Date();
  const currentYear = currentDay.getFullYear();
  return (
    <footer>
      <div className="bg-amber-100">
        <div className="container mx-auto pt-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-amber-950 text-sm text-center sm:text-left">
            © {currentYear} All Rights Reserved.
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-amber-950 text-sm">
            Siheung-daero, Siheung-si, Gyeonggi-do, Republic of Korea(🇰🇷)
          </span>
        </div>
        <div className="container mx-auto pb-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-amber-950 text-sm">
            Developed by CheezeMan
          </span>
        </div>
      </div>
    </footer>
  );
}

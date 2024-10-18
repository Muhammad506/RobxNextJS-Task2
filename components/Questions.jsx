const Questions = () => {
  return (
    <div className="w-full h-auto bg-green-600 flex flex-col lg:flex-row items-center justify-between  gap-8 p-6 md:p-8">
      <div className="text-white text-center md:text-left md:max-w-2xl w-full px-0 md:px items-center flex flex-col justify-center">
        <h className="text-2xl md:text-4xl font-extrabold mb-3 text-nowrap md:mb-6">
          Do You Have Questions?
        </h>
        <p className="text-base md:text-lg">
          We’ll help you grow your career and achieve success.
        </p>
      </div>

      <div className="mt-4 md:mt-0 px-2 md:px-12">
        <button className="border-4 rounded-full bg-white text-nowrap text-green-600 text-lg font-medium py-3 px-6 md:py-5 md:px-8 hover:bg-green-100 transition-all duration-300">
          Contact Us Today
        </button>
      </div>
    </div>
  );
};

export default Questions;

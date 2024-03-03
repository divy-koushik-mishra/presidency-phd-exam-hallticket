const Form = () => {
  return (
    <section className="flex flex-col items-center  ">
      <div className="border border-gray-800 py-10 px-16 my-10 bg-blur backdrop-filter backdrop-blur-sm">
        <div className=" ">
          <form className="flex flex-col w-full ">
            <label className=" text-xl" htmlFor="uid">
              Enter UID
            </label>
            <input
              className="text-black px-4 py-2 rounded-md "
              type="text"
              id="uid"
              name="uid"
              placeholder="Enter your UID"
            />
            <label className="mt-8 text-xl" htmlFor="dob">
              Enter your Date of Birth
            </label>
            <input
              className="text-black px-4 py-2 rounded-md "
              type="date"
              id="dob"
              name="dob"
            />
            <button className="mt-6 bg-[#003239] p-3 rounded-xl" type="submit">
              Download
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;

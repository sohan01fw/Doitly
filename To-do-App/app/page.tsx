import ListTodo from "@/components/ListTodo";
import Navbar from "@/components/Navbar";
import TopNav from "@/components/TopNav";
import UserTodo from "@/components/UserTodo";
// Web SDK
const page = () => {
  return (
    <div className="grid justify-center mt-[2rem]">
      <TopNav />
      <div className=" grid justify-center mt-[5rem]  ">
        <div className=" m-5 p-5">
          <h1 className="font-bold text-2xl mb-10 text-center">
            To-Do App🚀🚀🚀
          </h1>
          <Navbar />
          <UserTodo />
          <ListTodo />
        </div>
      </div>
    </div>
  );
};

export default page;

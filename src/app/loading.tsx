import { Spinner } from "@nextui-org/spinner";
const loading = () => {
  return (
    <div className=" h-screen bg-black/20 fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
      <Spinner color="warning" label="Loading please wait..." />
    </div>
  );
};

export default loading;

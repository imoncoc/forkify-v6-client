import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

type TTeamData = {
  name: string;
  position: string;
  about: string;
  photo: string;
};

const AboutTeamSection = () => {
  const teamData: TTeamData[] = [
    {
      name: "Md Imon Hossain",
      position: "Founder & CEO",
      about:
        "Visionary leader blending a love for culinary arts with cutting-edge technology to build a premier recipe-sharing platform.",
      photo:
        "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sarah Ahmed",
      position: "COO",
      about: "Ensures smooth operations, delivering the best service to users.",
      photo:
        "https://media.istockphoto.com/id/1342029049/photo/head-shot-of-beautiful-woman-student-teacher-or-blogger.jpg?s=612x612&w=0&k=20&c=NwyPh-KlEYBxJFCuFnzSiv1-pgGOCDxqctzIF7ZHig0=",
    },
    {
      name: "James Carter",
      position: "CTO",
      about:
        "Drives platform innovation, focusing on user-friendly design and security.",
      photo:
        "https://media.istockphoto.com/id/1342027604/photo/arab-male-english-teacher-explaining-rules-near-blackboard-standing-with-clipboard-smiling-at.jpg?s=612x612&w=0&k=20&c=uH6EdaZKnvOK3nxXeinoDqUbDKmS07TsUmJFRTXym9g=",
    },
    {
      name: "Nina ",
      position: "Marketing Director",
      about: "Expands our community through creative marketing strategies.",
      photo:
        "https://media.istockphoto.com/id/1124593620/photo/girl-in-muslim-clothes-calmly-looking-into-the-camera.jpg?s=612x612&w=0&k=20&c=ZSx1FvF0_oTI8ErkkpZamc-sGhxR_4-K0-_jv6Al3IU=",
    },
    {
      name: "Mark Johnson",
      position: "Customer Support Lead",
      about:
        "Dedicated to providing exceptional support and keeping users satisfied.",
      photo:
        "https://media.istockphoto.com/id/1389465862/photo/shot-of-a-young-businessman-working-on-his-laptop-at-his-desk.jpg?s=612x612&w=0&k=20&c=YZEk5hp1E8cv8y-xXLumH4H5zIVyyf4UdETZvsuH8Vk=",
    },
  ];

  return (
    <div className=" ">
      <div className="container mx-auto pt-32 pb-16">
        <div className="mb-16">
          <h3 className="text-4xl text-center">Team Section</h3>
          <p className="text-center text-slate-500 px-20">
            Our passionate team combines sports and technology expertise to
            deliver a seamless booking experience for all.
          </p>
        </div>
        {/* New Section */}
        <div>
          <div className="flex flex-row mx-auto flex-wrap justify-center items-center gap-8">
            {teamData?.map((item: TTeamData, index: number) => (
              <Card
                key={index}
                isFooterBlurred
                className=" h-[300px] col-span-12 sm:col-span-7"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    Our Team Member
                  </p>
                  <h4 className="text-white/90 font-medium text-xl">
                    {item.position}
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 w-full h-full object-cover"
                  src={item.photo}
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <Image
                      alt="Breathing app icon"
                      className="rounded-full w-10 h-11 bg-black"
                      src="https://nextui.org/images/breathing-app-icon.jpeg"
                    />
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60 text-yellow-200">
                        {item.name}
                      </p>
                      <p className="text-tiny text-white/60">{item.about}</p>
                    </div>
                  </div>
                  {/* <Button radius="full" size="sm">
                    Get App
                  </Button> */}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeamSection;

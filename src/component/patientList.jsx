import data from "../data.json";
import { TbCalendarEvent } from "react-icons/tb";
import { BsClockHistory } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

export const PatientList = () => {
  const avatarList = [
    {
      avatar:
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449309/Avatar/AvatarThree_mg1cgs.svg",
    },

    {
      avatar:
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449308/Avatar/AvatarThirteen_gjgk9b.svg",
    },
    {
      avatar:
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449307/Avatar/AvatarOne_gma0e0.svg",
    },

    {
      avatar:
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449307/Avatar/AvatarTwo_svgrsc.svg",
    },
    {
      avatar:
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449307/Avatar/AvatarEight_fvo3y4.svg",
    },
    {
      avatar:
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449306/Avatar/AvatarFive_ynsdwl.svg",
    },
    {
      avatar:
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449306/Avatar/AvatarSeven_ix1sac.svg",
    },
    {
      avatar:
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449306/Avatar/AvatarSix_taiexd.svg",
    },
    {
      avatar:
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687449306/Avatar/AvatarTen_mp2bxl.svg",
    },

    {
      avatar:
        "https://res.cloudinary.com/duqsyuriy/image/upload/v1687520455/Avatar/AvatarFifteen_wmdlk9.svg",
    },
  ];
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen">
      <div className="border rounded-3xl pb-10 ">
        <h1 className="text-2xl text-gray-600 text-left pl-10 pb-4 pt-10 font-semibold">
          {" "}
          Today's Appointment List
        </h1>
        <div className="flex flex-col items-center justify-center ml-10 mr-12">
          <table className=" table-auto pl-10 w-full">
            {/* h-1/2 w-1/2 */}
            <thead>
              <tr className="flex flex-row gap-8 p-4 border-slate-100 rounded-t-lg text-slate-500 bg-slate-50">
                <th className="pr-44">PATIENTS</th>
                <th className="pr-32">DATE</th>
                <th className="pr-32">TIME</th>
                <th className="pr-24"> DOCTOR</th>
                <th className="pr-14">INJURY</th>
                <th className="pr-10">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data.appointments.map(
                (
                  {
                    patient_name,
                    mobile_number,
                    appointment_date,
                    appointment_time,
                    doctor,
                    injury,
                  },
                  index
                ) => {
                  const showOrangeStar =
                    doctor === "Dr. Patel" || doctor === "Dr. Garcia";
                  return (
                    <tr
                      key={index}
                      className="flex flex-row items-center justify-start text-left border-b 	"
                    >
                      <td className="flex flex-row p-2  w-[200px] basis-3/12">
                        <div className="flex items-center gap-3">
                          <div className="flex">
                            <img
                              src={avatarList[index].avatar}
                              alt=""
                              className="h-10 w-10 rounded-full"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="font-bold">{patient_name}</div>
                            <div className="text-zinc-500">{mobile_number}</div>
                          </div>
                        </div>
                      </td>
                      <td className="basis-2/12 p-2 min-w-[100px]">
                        <div className="flex flex-row gap-1 items-center">
                          <span>
                            <TbCalendarEvent className="text-zinc-500" />
                          </span>
                          <div className="text-zinc-500">
                            {appointment_date}
                          </div>
                        </div>
                      </td>
                      <td className="basis-2/12 p-2 min-w-[140px]">
                        <div className="flex flex-row items-center gap-2">
                          <BsClockHistory className="text-zinc-500" />

                          <div className="text-zinc-500">
                            {appointment_time}
                          </div>
                        </div>
                      </td>
                      <td className="basis-2/12 p-2 min-w-[100px]">
                        <div className="flex flex-row items-center gap-2">
                          <MdStars
                            style={{
                              color: showOrangeStar
                                ? "orange"
                                : "mediumSeaGreen",
                              fontSize: "30px",
                            }}
                          />
                          <div className="text-zinc-500"> {doctor}</div>
                        </div>
                      </td>
                      <td className="basis-2/12 p-2 min-w-[100px]">
                        <div className=" rounded-xl py-1 px-3 text-slate-500 font-bold bg-slate-200 inline-block">
                          {injury}
                        </div>
                      </td>
                      <td className="basis-0.5/6 p-2 min-w-[100px]">
                        <BsThreeDotsVertical className="text-zinc-500" />
                      </td>
                    </tr>
                  );
                }
              )}
              {/* </div> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

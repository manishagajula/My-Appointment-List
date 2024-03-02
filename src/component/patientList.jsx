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
        <h1 className="text-2xl text-gray-600 text-left pl-10 pb-4 pt-10">
          {" "}
          Today's Appointment List
        </h1>
        <div className="flex flex-col items-center justify-center ml-10 mr-10">
          <table className=" table-auto pl-10">
            {/* h-1/2 w-1/2 */}
            <thead>
              <tr className="flex flex-row gap-32 p-4 border-slate-100 rounded-t-lg text-slate-500 bg-slate-50">
                <th className="pr-20">PATIENTS</th>
                <th className="pr-20">DATE</th>
                <th className="pr-10">TIME</th>
                <th className="pr-14">DOCTOR</th>
                <th className="pr-10">INJURY</th>
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
                ) => (
                  <tr
                    key={index}
                    className="flex flex-row gap-28 items-center justify-start text-left border-b "
                  >
                    {/* <tr className="flex flex-col"> */}
                    <div className="flex flex-row items-center justify-center p-2">
                      <div>
                        <td>
                          <img
                            src={avatarList[index].avatar}
                            alt=""
                            className="h-10 w-10 rounded-full"
                          />
                        </td>
                      </div>
                      <div className="flex flex-col pr-6">
                        <td>{patient_name}</td>
                        <td>{mobile_number}</td>
                      </div>
                    </div>
                    {/* </tr> */}
                    {/* <tr className="flex items-start gap-32 "> */}
                    <div className="flex flex-row gap-1 items-center justify-start">
                      <span>
                        <TbCalendarEvent />
                      </span>
                      <td className="">{appointment_date}</td>
                    </div>
                    <div className="flex flex-row items-center justify-start pr-8">
                      <BsClockHistory />

                      <td>{appointment_time}</td>
                    </div>
                    {/* <a
                  href="https://www.flaticon.com/free-icons/star"
                  title="star icons"
                ></a> */}
                    <div className="flex flex-row items-center justify-center">
                      <MdStars style={{ color: "blue" }} />
                      <td> {doctor}</td>
                    </div>
                    <div className="pr-10">
                      <td className=" rounded-xl p-2 text-slate-500 font-bold bg-slate-200">
                        {injury}
                      </td>
                    </div>
                    {/* <td></td> */}
                    {/* </tr> */}
                    <td>
                      <BsThreeDotsVertical />
                    </td>
                  </tr>
                )
              )}
              {/* </div> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

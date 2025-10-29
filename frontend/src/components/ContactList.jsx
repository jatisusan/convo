import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersSkeleton from "./UsersSkeleton";

const ContactList = () => {
  const { allContacts, isUsersLoading, getAllContacts, setSelectedUser } =
    useChatStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersSkeleton />;

  return (
    <>
      {allContacts.map((contact) => (
        <div
          key={contact._id}
          className="hover:bg-[#160f2c] bg-[#160f2c]/50 p-4 rounded-lg cursor-pointer"
          onClick={() => setSelectedUser(contact)}
        >
          <div className="flex items-center gap-3">
            <div className={`avatar avatar-online`}>
              <div className="size-12 rounded-full">
                <img src={contact.profilePic || "/avatar.png"} alt="avatar" />
              </div>
            </div>

            <h4 className="font-medium truncate text-light-100">
              {contact.fullName}
            </h4>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactList;

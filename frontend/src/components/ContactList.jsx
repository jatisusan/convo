import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersSkeleton from "./UsersSkeleton";
import { useAuthStore } from "../store/useAuthStore";

const ContactList = () => {
  const { allContacts, isUsersLoading, getAllContacts, setSelectedUser } =
    useChatStore();

  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersSkeleton />;

  return (
    <>
      {allContacts.map((contact) => (
        <div
          key={contact._id}
          className="hover:bg-[#160f2c] bg-[#160f2c]/50 md:p-4 p-2 rounded-lg cursor-pointer"
          onClick={() => setSelectedUser(contact)}
        >
          <div className="flex items-center max-sm:justify-center gap-3">
            <div
              className={`avatar ${
                onlineUsers.includes(contact._id) && "avatar-online"
              }`}
            >
              <div className="md:size-12 size-10 rounded-full">
                <img src={contact.profilePic || "/avatar.png"} alt="avatar" />
              </div>
            </div>

            <h4 className="font-medium truncate text-light-100 max-sm:hidden">
              {contact.fullName}
            </h4>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactList;

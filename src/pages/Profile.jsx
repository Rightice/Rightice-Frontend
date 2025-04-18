import Sidebar from "../components/side-top-bar";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("userProfile"));

  return (
    <Sidebar>
      {user ? (
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">User Profile</h2>
          <ul className="space-y-2">
            <li>
              <strong>Username:</strong> {user.username}
            </li>
            <li>
              <strong>Email:</strong> {user.email}
            </li>
            <li>
              <strong>Gender:</strong> {user.gender}
            </li>
            <li>
              <strong>Phone:</strong> {user.phone}
            </li>
            <li>
              <strong>Address:</strong> {user.address}
            </li>
          </ul>
        </div>
      ) : (
        <p className="p-4">No user data found.</p>
      )}
    </Sidebar>
  );
};

export default Profile;

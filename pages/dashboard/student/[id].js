import { useRouter } from "next/router";

const UserPage = () => {
  const router = useRouter();
  const { id } = router.query; // Access the dynamic route param

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default UserPage;

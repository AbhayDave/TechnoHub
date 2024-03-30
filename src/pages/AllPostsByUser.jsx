import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import authService from "../appwrite/auth";
import SearchBox from "../components/SearchBox";

function AllPostsByUser() {
  // const userData = useSelector((state) => state.auth.userData);
  // const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          const posts = await appwriteService.getPostsByUser(userData.$id);
          if (posts) {
            setPosts(posts.documents);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        {/* <SearchBox /> */}
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPostsByUser;

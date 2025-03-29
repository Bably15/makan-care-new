import img1 from "../../assets/Component 4.png";
import img2 from "../../assets/kitchencleanung1.png";
import img3 from "../../assets/slide6.png";
import img4 from "../../assets/small.png";
import img5 from "../../assets/pic5.png";

const InstagramSection = () => {
    const posts = [
        { id: 1, imageUrl: img1 },
        { id: 2, imageUrl: img2 },
        { id: 3, imageUrl: img3 },
        { id: 4, imageUrl: img4 },
        { id: 5, imageUrl: img5 },
    ];

    return (
        <div className="w-full py-14 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto p-4">
                <div className="flex flex-col items-center text-center">
                    <h2 className="font-medium text-2xl mb-10">
                        Find us on Instagram
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {posts.map((post) => (
                            <img
                                key={post.id}
                                src={post.imageUrl}
                                alt="in"
                                className="w-full h-35 object-cover cover-center rounded-lg"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstagramSection;
// <div className="instagram-section">
//   <h2>Instagram</h2>
//   <div className="posts">
//     {posts.map((post) => (
//       <div key={post.id} className="post" onClick={() => handleImageClick(post.imageUrl)}>
//         <img src={post.imageUrl} alt={`Post ${post.id}`} />
//       </div>
//     ))}
//   </div>

//   {selectedImage && (
//     <div className="modal" onClick={handleCloseModal}>
//       <img src={selectedImage} alt="Selected Post" className="modal-image" />
//     </div>
//   )}
// </div>

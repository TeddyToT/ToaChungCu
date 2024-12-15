import React from 'react';
import MapHolder from './MapHolder';

const Introduction = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Sidebar />
                <MainContent />
            </div>
            <MapHolder />
        </div>
    );
};

export default Introduction;

const Sidebar = () => {
    return (
        <aside className="bg-white p-4 rounded shadow">
            <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <h2 className="font-bold text-lg mb-2">Bài viết mới nhất</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Bí quyết lựa chọn căn hộ hoàn hảo cho gia đình bạn.</li>
                <li>Khám phá xu hướng thiết kế căn hộ cao cấp năm 2024.</li>
                <li>Tầm quan trọng của không gian xanh trong căn hộ hiện đại.</li>
                <li>Penthouse: Sống ở đỉnh cao, tận hưởng sự khác biệt.</li>
                <li>Làm thế nào để tăng giá trị bất động sản qua các cải tạo nhỏ?</li>
            </ul>
        </aside>
    );
};

const MainContent = () => {
    return (
        <div className="col-span-3 bg-white p-6 rounded shadow">
            <h1 className="text-2xl font-bold mb-4">TẬP ĐOÀN GEN GROUP (GENG)</h1>
            <p className="mb-4">
                GEN GROUP (GENG) là tập đoàn bất động sản tiên phong tại Việt Nam, chuyên cung cấp các loại hình căn hộ cao cấp như chung cư hiện đại, penthouse sang trọng, và các không gian sống đẳng cấp khác. Với bề dày kinh nghiệm cùng tầm nhìn chiến lược, GENG không chỉ kiến tạo những công trình chất lượng mà còn mang đến những giải pháp sống hoàn hảo, đáp ứng nhu cầu đa dạng và nâng tầm phong cách sống cho khách hàng.
            </p>
            <p className="mb-4">
                Chúng tôi tin rằng không gian sống không chỉ là nơi để ở, mà còn là nơi truyền cảm hứng, khơi gợi những giá trị bền vững và nuôi dưỡng hạnh phúc. Từ những thiết kế tinh tế đến tiện ích vượt trội, mỗi dự án của GENG đều được đầu tư kỹ lưỡng, kết hợp hài hòa giữa công nghệ hiện đại, không gian xanh và các yếu tố thẩm mỹ, mang đến trải nghiệm sống khác biệt cho mọi cư dân.
            </p>
            <p className="mb-4">
                Slogan của chúng tôi, "Sống trọn chất mỹ, làm chủ tầm cao," là kim chỉ nam cho mọi hoạt động của tập đoàn, thể hiện khát vọng nâng tầm cuộc sống và khẳng định vị thế dẫn đầu trong ngành bất động sản. Với GENG, khách hàng không chỉ sở hữu một căn hộ, mà còn làm chủ một phong cách sống đẳng cấp, trọn vẹn và đầy tự hào.
            </p>
        </div>
    );
};



import React from 'react';

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
        <main className="col-span-3 bg-white p-6 rounded shadow">
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
        </main>
    );
};

const MapHolder = () => {
    return (
        <div className="mt-8 bg-white p-4 rounded shadow">
            {/* add a arcGIS map */}

            <iframe
                title="GENG Map"
                className="w-full h-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.903983882642!2d105.779934314406!3d21.028812893004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf1c6b9c5e1%3A0x3b6b7d5c5e1d0d0a!2zVHLGsOG7nW5nIFRo4bqhbuafLCDEkOG6oWk!5e0!3m2!1svi!2s!4v1632489381583!5m2!1svi!2s"
                allowFullScreen=""
                loading="lazy"
            ></iframe>

            {/* Mô hình tổng thể toà nhà */}
            <p className="text-xl font-bold mb-4">
                Mô hình tổng thể toà nhà
            </p>

        </div>
    );
};

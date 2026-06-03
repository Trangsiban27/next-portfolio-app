import React from 'react'
import KindWordBox from './KindWordBox'

const KindWordGrid = () => {

    const values = [
        {
            text: 'I had the pleasure of working with Ban, a talented Frontend/React developer with strong fundamentals and a great attitude toward learning. What stands out most is his accountability and team-first mindset. He takes ownership, follow through, and collaborate effectively across teams. He also pick up new concepts quickly and apply feedback well. Even early in their career, Ban shows clear leadership potential, supporting teammates and thinking beyond just their tasks.I highly recommend them to any team looking for a reliable and promising React developer.',
            author: {
                avatar: '/recomendation/vietdoan.jpeg',
                name: 'Viet Doan',
                role: 'Chairman, CTO at Accessed'
            }
        },
        {
            text: 'Bân là một React Web Developer không chỉ giỏi code mà còn có tư duy sản phẩm tốt. Trong thời Bân làm tại công ty từ khi là sinh viên thực tập cho đến khi bạn đã được giao nhiệm vụ trưởng nhóm web từ 3-8 thành viên, tôi luôn đánh giá cao sự chủ động và trách nhiệm của bạn ấy trong việc đóng ý tưởng để cải thiện trải nghiệm người dùng (UX), phân bổ công việc cho từng thành viên cho hiệu quả với cá nhân và cả nhóm. Bân làm việc nhóm rất tốt, luôn sẵn sàng hỗ trợ trong team và cross-team nhiệt tình, giữ thái độ tích cực ngay cả trong những giai đoạn nước rút của dự án. Tôi luôn mong sau này sẽ lại có cơ hội quản lý/hợp tác/làm chung với bạn!',
            author: {
                avatar: '/recomendation/haoha.jpeg',
                name: 'Hao Ha',
                role: 'CEO, HR Manager at Accessed'
            }
        }
    ]

    return (
        <div>
            <span className='text-6xl font-bold text-white'>Kind Word</span>

            <div className='grid md:grid-cols-2 gap-6 mt-16'>
                {values?.map((item, index) => (
                    <KindWordBox key={index} data={item} />
                ))}
            </div>
        </div>
    )
}

export default KindWordGrid
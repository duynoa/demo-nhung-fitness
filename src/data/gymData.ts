export interface Program {
  id: string;
  name: string;
  category: 'gym' | 'pilates' | 'yoga' | 'dance' | 'kickboxing';
  tagline: string;
  description: string;
  duration: string;
  caloriesBurned: string;
  intensity: 'Nhẹ nhàng' | 'Vừa phải' | 'Thách thức' | 'Cao độ';
  benefits: string[];
  image: string;
  popular?: boolean;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  bio: string;
  image: string;
  quote: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  profession: string;
  result: string;
  review: string;
  rating: number;
  avatar: string;
  beforeAfterImg?: string;
  programUsed: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  duration: string;
  originalPrice: string;
  salePrice: string;
  pricePerMonth: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  highlight: string;
}

export interface ScheduleItem {
  id: string;
  timeSlot: string;
  className: string;
  category: string;
  trainer: string;
  room: string;
  dayOfWeek: 'Thứ 2' | 'Thứ 3' | 'Thứ 4' | 'Thứ 5' | 'Thứ 6' | 'Thứ 7' | 'Chủ Nhật';
  capacity: number;
  bookedCount: number;
}

export const PROGRAMS: Program[] = [
  {
    id: 'pt-11',
    name: 'Personal Training 1:1 Dành Cho Nữ',
    category: 'gym',
    tagline: 'Lộ trình cá nhân hóa - Đốt mỡ cấp tốc, kiến tạo đường cong',
    description: 'HLV nữ chuyên môn cao thiết kế riêng bài tập theo sinh lý & hình thể phái đẹp. Tập trung siết eo, nâng cơ mông đào, thon gọn đùi mà không lo cơ bắp bị thô.',
    duration: '60 phút / buổi',
    caloriesBurned: '450 - 650 kcal',
    intensity: 'Vừa phải',
    benefits: [
      'Đo thông số InBody 3D hàng tuần',
      'Thực đơn dinh dưỡng cá nhân hóa theo khẩu vị',
      'Tập trung phát triển Mông - Eo - Thắt lưng quyến rũ',
      'Tập luyện 1:1 riêng tư, không lo e ngại'
    ],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 'pilates-reformer',
    name: 'Pilates Reformer Chuyên Sâu',
    category: 'pilates',
    tagline: 'Sửa tư thế, thon gọn cơ cốt lõi & định hình đường cong mảnh mai',
    description: 'Sử dụng máy Reformer nhập khẩu cao cấp giúp cải thiện tư thế gù lưng, võng lưng, tạo cơ bụng phẳng lỳ và đôi chân thon dài.',
    duration: '50 phút / buổi',
    caloriesBurned: '300 - 450 kcal',
    intensity: 'Vừa phải',
    benefits: [
      'Giảm đau mỏi vai găm, cột sống nhân phòng',
      'Định hình vóc dáng thanh thoát, thon gọn',
      'Cơ bụng dẻo dai và phẳng lỳ',
      'Lớp nhóm nhỏ tối đa 6 hội viên'
    ],
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: 'yoga-hormone',
    name: 'Yoga Cân Bằng Nội Tiết & Giảm Stress',
    category: 'yoga',
    tagline: 'Thư giãn tâm trí, trẻ hóa làn da & cân bằng hormone phái đẹp',
    description: 'Chuỗi bài tập Yoga kết hợp định tâm thiền định giúp giảm cortisol (hormone gây tích mỡ bụng), cải thiện giấc ngủ và điều hòa nội tiết tố nữ.',
    duration: '60 phút / buổi',
    caloriesBurned: '250 - 350 kcal',
    intensity: 'Nhẹ nhàng',
    benefits: [
      'Cải thiện nội tiết tố và làn da tươi trẻ',
      'Giảm căng thẳng, ngủ ngon sâu giấc',
      'Tăng độ dẻo dai toàn thân',
      'Không gian yên tĩnh ngát hương thảo mộc'
    ],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'zumba-dance',
    name: 'Zumba Fit & Dance Cardio',
    category: 'dance',
    tagline: 'Bùng nổ năng lượng, đốt cháy mỡ thừa cùng âm nhạc sôi động',
    description: 'Lớp học nhảy sôi động dành riêng cho chị em. Vừa xả stress vừa đốt cháy hàng trăm calo mà không cảm thấy mệt mỏi.',
    duration: '55 phút / buổi',
    caloriesBurned: '500 - 700 kcal',
    intensity: 'Thách thức',
    benefits: [
      'Đốt mỡ toàn thân hiệu quả nhanh chóng',
      'Tăng cường sức khỏe tim mạch',
      'Giải tỏa mọi áp lực công việc & gia đình',
      'Kết nối cộng đồng chị em vui vẻ năng động'
    ],
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'kickboxing-women',
    name: 'Kickboxing Nữ & Self-Defense',
    category: 'kickboxing',
    tagline: 'Mạnh mẽ, thon gọn bắp tay & giải tỏa năng lượng tiêu cực',
    description: 'Kết hợp đòn đấm, đá cardio giúp thon gọn bắp tay, eo thon và trang bị khả năng phản xạ tự vệ thực chiến cho phái đẹp.',
    duration: '50 phút / buổi',
    caloriesBurned: '600 - 800 kcal',
    intensity: 'Cao độ',
    benefits: [
      'Siết mỡ bắp tay & mỡ lưng nách nhanh nhất',
      'Học kỹ năng tự vệ cơ bản cho nữ',
      'Giải tỏa stress cực mạnh',
      'Đội ngũ HLV nữ hướng dẫn an toàn'
    ],
    image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'postpartum-fit',
    name: 'Phục Hồi Vóc Dáng Sau Sinh',
    category: 'gym',
    tagline: 'An toàn, nhẹ nhàng, cải thiện tách cơ bụng cho mẹ bế bồng',
    description: 'Chương trình được thiết kế đặc biệt cho các mẹ sau sinh từ 3 tháng trở lên. Hỗ trợ khép khoảng tách cơ bụng, săn chắc vùng đùi bụng và lấy lại vóc dáng thanh xuân.',
    duration: '45 phút / buổi',
    caloriesBurned: '300 - 450 kcal',
    intensity: 'Nhẹ nhàng',
    benefits: [
      'Kiểm tra độ tách cơ bụng (Diastasis Recti)',
      'Bài tập an toàn không ảnh hưởng nguồn sữa',
      'Cải thiện vùng da chùng nhão sau sinh',
      'HLV theo sát động viên tâm lý cho mẹ'
    ],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 't1',
    name: 'Nhung Nguyễn (Master Founder)',
    role: 'Sáng Lập & HLV Trưởng Fitness Nữ',
    experience: '8+ năm kinh nghiệm',
    specialties: ['Siết eo thon', 'Độ mông đào chuẩn S-Line', 'Dinh dưỡng nữ'],
    bio: 'Founder Nhung Fitness với sứ mệnh tạo nên không gian tập luyện văn minh, riêng tư 100% giúp phái đẹp tự tin khai phóng vóc dáng hoàn hảo nhất.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600',
    quote: 'Chị em chúng ta không cần tập để giống ai cả, chỉ cần trở thành phiên bản quyến rũ & khỏe mạnh nhất của chính mình.'
  },
  {
    id: 't2',
    name: 'Huỳnh Mai Anh',
    role: 'HLV Senior Pilates Reformer & Posture',
    experience: '5 năm kinh nghiệm',
    specialties: ['Pilates Reformer', 'Chỉnh tư thế vai gù', 'Phục hồi sau sinh'],
    bio: 'Chuyên gia chứng chỉ Pilates quốc tế, đã giúp hơn 400 chị em văn phòng thoát khỏi tình trạng đau lưng võng và sở hữu cơ bụng rãnh 11.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600',
    quote: 'Một tư thế chuẩn và một vùng core chắc chắn chính là nền tảng của sự trẻ trung lâu dài.'
  },
  {
    id: 't3',
    name: 'Lê Thảo Trang',
    role: 'HLV Kickboxing & Fat Loss Specialist',
    experience: '6 năm kinh nghiệm',
    specialties: ['Giảm mỡ cấp tốc', 'Kickboxing nữ', 'Tăng sức bền'],
    bio: 'Nhiệt huyết, năng lượng bùng nổ trong từng buổi tập. Chuyên gia thiết kế chuỗi bài tập đốt calo tối đa mà vẫn giữ tinh thần thư thái.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
    quote: 'Mỗi giọt mồ hôi rơi xuống là một milimet mỡ thừa biến mất!'
  },
  {
    id: 't4',
    name: 'Trần Minh Ngọc',
    role: 'HLV Yoga & Nội Tiết Tố Nữ',
    experience: '7 năm kinh nghiệm',
    specialties: ['Yoga Cân Bằng Nội Tiết', 'Thiền Định Trị Liệu', 'Dẻo Dai Cơ Thể'],
    bio: 'Tốt nghiệp chứng chỉ Alliance 500h tại Ấn Độ. Luôn truyền cảm hứng yêu thương bản thân và lắng nghe từng nhịp thở của cơ thể.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
    quote: 'Thân khỏe - Tâm an - Vóc dáng tự nhiên sẽ tỏa sáng rạng rỡ.'
  }
];

export const WHY_US_FEATURES = [
  {
    icon: 'ShieldCheck',
    title: '100% Không Gian Cho Nữ',
    desc: 'Không e ngại ánh nhìn, không chen chúc. Thoải mái diện những bộ đồ tập đẹp nhất và tự tin vận động.'
  },
  {
    icon: 'UserCheck',
    title: 'Đội Ngũ HLV Nữ Chuyên Môn',
    desc: 'Tất cả Trainer là nữ, am hiểu sâu sắc về sinh lý, chu kỳ kinh nguyệt & cơ địa của chị em phụ nữ Việt.'
  },
  {
    icon: 'Dumbbell',
    title: 'Máy Tập Thiết Kế Chuẩn Phái Đẹp',
    desc: 'Thiết bị nhập khẩu có biên độ phù hợp khung xương nữ giới, tập trung đúng vùng mông - eo - đùi không bị thô.'
  },
  {
    icon: 'Sparkles',
    title: 'Tiện Ích Khách Sạn 5 Sao',
    desc: 'Phòng xông hơi thảo dược, phòng trang điểm trang bị máy sấy Dyson, dầu gội thiên nhiên & Smoothie Bar healthy.'
  },
  {
    icon: 'HeartPulse',
    title: 'Đo InBody 3D & Dinh Dưỡng',
    desc: 'Phân tích chỉ số mỡ dưới da, mỡ nội tạng và lên thực đơn ăn uống ngon miệng không cần nhịn ăn khắc nghiệt.'
  },
  {
    icon: 'Users',
    title: 'Cộng Đồng Chị Em Văn Minh',
    desc: 'Môi trường thân thiện, gắn kết, cùng nhau truyền động lực sống lành mạnh và chia sẻ bí quyết làm đẹp.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'res1',
    name: 'Chị Phương Anh',
    age: 32,
    profession: 'Quản lý Marketing (Dân văn phòng)',
    result: 'Giảm 7kg & 9cm vòng eo sau 2.5 tháng',
    review: 'Trước đây đi gym hỗn hợp mình rất ngại vì mấy anh tập tạ nặng cứ nhìn ngó, máy tập thì toàn size to khó dùng. Đến với Nhung Fit mình mê ngay không gian thơm tho, toàn chị em vui vẻ. Mình tập Pilates + PT 1:1, eo thon thấy rõ luôn!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    programUsed: 'PT 1:1 + Pilates Reformer'
  },
  {
    id: 'res2',
    name: 'Chị Thanh Hằng',
    age: 28,
    profession: 'Mẹ bế bồng sau sinh 6 tháng',
    result: 'Tăng 4cm vòng 3 & Siết phẳng cơ bụng',
    review: 'Sau sinh bụng mình bị xổ và tách cơ nặng. HLV Nhung Nguyễn đã thiết kế bài tập rất nhẹ nhàng nhưng trúng đích. Sau 3 tháng cơ bụng dính lại, mông cao tròn trông sexy hơn cả thời con gái!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    programUsed: 'Phục Hồi Sau Sinh & Gym Nữ'
  },
  {
    id: 'res3',
    name: 'Bạn Khánh Linh',
    age: 24,
    profession: 'Freelancer Designer',
    result: 'Cải thiện gù lưng & Sống lành mạnh hơn',
    review: 'Ngồi máy tính nhiều nên lưng mình bị gù và đau mỏi cổ vai gáy. Học Yoga và Pilates ở Nhung Fit giúp mình đứng thẳng, hết hẳn đau lưng. Mấy chị HLV nữ dễ thương như chị em gái vậy!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200',
    programUsed: 'Yoga Nội Tiết & Pilates'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-self',
    name: 'Gói Tự Tập (Không PT)',
    duration: '1 Tháng Tập Tự Do',
    originalPrice: '600.000 đ',
    salePrice: '399.000 đ',
    pricePerMonth: '399.000 đ/tháng',
    badge: 'Tiết Kiệm Nhất',
    features: [
      'Tập không giới hạn thời gian khu vực Gym Nữ',
      'Sử dụng đầy đủ hệ thống máy tập hiện đại',
      'Miễn phí 01 lần đo chỉ số cơ thể InBody 3D',
      'Sử dụng phòng tắm, locker & phòng xông hơi',
      'Không phụ thu, tự do chủ động lịch tập'
    ],
    highlight: 'Chi phí siêu tiết kiệm chỉ 399k/tháng cho chị em tự tập'
  },
  {
    id: 'plan-trial',
    name: 'Gói Trải Nghiệm 1 Tháng',
    duration: '1 Tháng Tập Luyện',
    originalPrice: '1.800.000 đ',
    salePrice: '1.190.000 đ',
    pricePerMonth: '1.190.000 đ/tháng',
    badge: 'Dành Cho Người Mới',
    features: [
      'Tập không giới hạn toàn bộ khu vực Gym Nữ',
      'Miễn phí 02 buổi tập cùng HLV Nữ 1:1',
      'Đo phân tích InBody 3D định kỳ',
      'Tự do tham gia các lớp Yoga & Zumba cơ bản',
      'Sử dụng phòng xông hơi & xà phòng cao cấp'
    ],
    highlight: 'Trải nghiệm không gian tập luyện nữ quyền chuẩn 5 sao'
  },
  {
    id: 'plan-pro',
    name: 'Gói Hội Viên Bán Niên (6 Tháng)',
    duration: '6 Tháng + Tặng 1 Tháng',
    originalPrice: '9.600.000 đ',
    salePrice: '5.990.000 đ',
    pricePerMonth: 'chỉ ~850.000 đ/tháng',
    badge: 'Được Chọn Nhiều Nhất',
    popular: true,
    features: [
      'Tập không giới hạn Gym + Yoga + Zumba + Kickboxing',
      'Tặng 05 buổi tập Pilates Reformer đẳng cấp',
      'Tặng 04 buổi tập cùng HLV Cá Nhân 1:1',
      'Miễn phí tủ đồ Locker riêng & dịch vụ khăn tắm',
      'Tặng 01 Bình nước giữ nhiệt NHUNG FIT cao cấp',
      'Giảm 15% đồ uống tại Smoothie Bar'
    ],
    highlight: 'Ưu đãi 35% + Quà tặng độc quyền trị giá 2.5 triệu'
  },
  {
    id: 'plan-vip',
    name: 'Gói PT 1:1 Đổi Vóc Dáng (24 Buổi)',
    duration: 'Khóa 2 tháng siết dáng',
    originalPrice: '12.000.000 đ',
    salePrice: '8.400.000 đ',
    pricePerMonth: '350.000 đ/buổi',
    badge: 'Cam Kết Vóc Dáng',
    features: [
      '24 Buổi tập cá nhân hóa 1:1 với HLV Nữ Chuyên Nghiệp',
      'Lên thực đơn dinh dưỡng chi tiết từng ngày',
      'Cam kết bằng văn bản giảm từ 3-6kg mỡ hoặc tăng 3-5cm vòng 3',
      'Miễn phí thẻ Gym 3 tháng đi kèm',
      'Bảo hành vóc dáng 6 tháng sau khóa học'
    ],
    highlight: 'Lộ trình nhanh nhất để sở hữu vóc dáng S-Line vạn người mê'
  }
];

export const SCHEDULE_ITEMS: ScheduleItem[] = [
  // Monday
  { id: 's1', timeSlot: '06:30 - 07:30', className: 'Yoga Cân Bằng Sáng', category: 'Yoga', trainer: 'Trần Minh Ngọc', room: 'Studio 1', dayOfWeek: 'Thứ 2', capacity: 12, bookedCount: 9 },
  { id: 's2', timeSlot: '09:00 - 10:00', className: 'Pilates Reformer Core', category: 'Pilates', trainer: 'Huỳnh Mai Anh', room: 'Pilates Room', dayOfWeek: 'Thứ 2', capacity: 6, bookedCount: 5 },
  { id: 's3', timeSlot: '17:30 - 18:30', className: 'Gym Booty & Core (Thon Eo Nâng Mông)', category: 'Gym', trainer: 'Nhung Nguyễn', room: 'Main Gym', dayOfWeek: 'Thứ 2', capacity: 15, bookedCount: 14 },
  { id: 's4', timeSlot: '18:45 - 19:45', className: 'Zumba Fit Dance', category: 'Dance', trainer: 'Lê Thảo Trang', room: 'Studio 2', dayOfWeek: 'Thứ 2', capacity: 20, bookedCount: 18 },

  // Tuesday
  { id: 's5', timeSlot: '07:00 - 08:00', className: 'Kickboxing Nữ Burn Fat', category: 'Kickboxing', trainer: 'Lê Thảo Trang', room: 'Studio 2', dayOfWeek: 'Thứ 3', capacity: 12, bookedCount: 8 },
  { id: 's6', timeSlot: '10:00 - 11:00', className: 'Pilates Sửa Tư Thế Back & Neck', category: 'Pilates', trainer: 'Huỳnh Mai Anh', room: 'Pilates Room', dayOfWeek: 'Thứ 3', capacity: 6, bookedCount: 6 },
  { id: 's7', timeSlot: '18:00 - 19:00', className: 'Yoga Giảm Stress & Cột Sống', category: 'Yoga', trainer: 'Trần Minh Ngọc', room: 'Studio 1', dayOfWeek: 'Thứ 3', capacity: 15, bookedCount: 11 },

  // Wednesday
  { id: 's8', timeSlot: '06:30 - 07:30', className: 'Pilates Reformer Fit', category: 'Pilates', trainer: 'Huỳnh Mai Anh', room: 'Pilates Room', dayOfWeek: 'Thứ 4', capacity: 6, bookedCount: 4 },
  { id: 's9', timeSlot: '17:30 - 18:30', className: 'Gym Hiit Sculpt Nữ', category: 'Gym', trainer: 'Nhung Nguyễn', room: 'Main Gym', dayOfWeek: 'Thứ 4', capacity: 15, bookedCount: 12 },
  { id: 's10', timeSlot: '18:45 - 19:45', className: 'Bungee Fly & Dance', category: 'Dance', trainer: 'Lê Thảo Trang', room: 'Studio 2', dayOfWeek: 'Thứ 4', capacity: 12, bookedCount: 10 },

  // Thursday
  { id: 's11', timeSlot: '07:00 - 08:00', className: 'Yoga Nội Tiết Tố Nữ', category: 'Yoga', trainer: 'Trần Minh Ngọc', room: 'Studio 1', dayOfWeek: 'Thứ 5', capacity: 15, bookedCount: 13 },
  { id: 's12', timeSlot: '18:00 - 19:00', className: 'Kickboxing & Self Defense', category: 'Kickboxing', trainer: 'Lê Thảo Trang', room: 'Studio 2', dayOfWeek: 'Thứ 5', capacity: 12, bookedCount: 9 },

  // Friday
  { id: 's13', timeSlot: '06:30 - 07:30', className: 'Pilates Stretch & Relax', category: 'Pilates', trainer: 'Huỳnh Mai Anh', room: 'Pilates Room', dayOfWeek: 'Thứ 6', capacity: 6, bookedCount: 5 },
  { id: 's14', timeSlot: '17:30 - 18:30', className: 'Gym S-Line Full Body', category: 'Gym', trainer: 'Nhung Nguyễn', room: 'Main Gym', dayOfWeek: 'Thứ 6', capacity: 15, bookedCount: 15 },
  { id: 's15', timeSlot: '18:45 - 19:45', className: 'Zumba Weekend Party', category: 'Dance', trainer: 'Lê Thảo Trang', room: 'Studio 2', dayOfWeek: 'Thứ 6', capacity: 20, bookedCount: 19 },

  // Saturday
  { id: 's16', timeSlot: '08:30 - 09:30', className: 'Yoga Thảo Mộc Cuối Tuần', category: 'Yoga', trainer: 'Trần Minh Ngọc', room: 'Studio 1', dayOfWeek: 'Thứ 7', capacity: 18, bookedCount: 16 },
  { id: 's17', timeSlot: '10:00 - 11:00', className: 'Pilates Reformer Advanced', category: 'Pilates', trainer: 'Huỳnh Mai Anh', room: 'Pilates Room', dayOfWeek: 'Thứ 7', capacity: 6, bookedCount: 6 },

  // Sunday
  { id: 's18', timeSlot: '09:00 - 10:15', className: 'Masterclass: Dinh Dưỡng & Yoga Thiền', category: 'Yoga', trainer: 'Nhung Nguyễn & Minh Ngọc', room: 'Main Lounge', dayOfWeek: 'Chủ Nhật', capacity: 25, bookedCount: 22 }
];

export const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    title: 'Khu Vực Gym Nữ Hiện Đại',
    category: 'Gym Zone'
  },
  {
    url: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    title: 'Phòng Tập Pilates Reformer Cao Cấp',
    category: 'Pilates Studio'
  },
  {
    url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    title: 'Không Gian Yoga Thoáng Đãng Thảo Mộc',
    category: 'Yoga Room'
  },
  {
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    title: 'Phòng Trang Điểm & Máy Sấy Dyson',
    category: 'Locker & Spa'
  },
  {
    url: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&q=80&w=800',
    title: 'Phòng Xông Hơi Thảo Dược Thư Giãn',
    category: 'Sauna Zone'
  },
  {
    url: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800',
    title: 'Healthy Smoothie & Tea Lounge',
    category: 'Smoothie Bar'
  }
];

export const CONTACT_INFO = {
  brandName: 'NHUNG FIT',
  fullName: 'Nhung Fitness - Women Only Fitness Center',
  address: 'Số 88 Đường Nguyễn Thị Minh Khai, Quận 3, TP. Hồ Chí Minh',
  hotline: '0988.123.456 / 028.7777.8888',
  email: 'cskh@nhungfitness.vn',
  workingHours: 'Thứ 2 - Chủ Nhật: 06:00 - 21:30',
  zalo: '0988123456',
  facebook: 'https://facebook.com/nhungfitnesswomen',
  instagram: 'https://instagram.com/nhungfit_women'
};

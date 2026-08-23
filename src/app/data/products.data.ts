export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export const products: Product[] = [
  //موالح
  {
    id: 1000,
    name: 'فستق حلبي',
    price: 120000,
    category: 'savory'
  },
  {
    id: 1002,
    name: 'كاجو',
    price: 95000,
    category: 'savory'
  },
  {
    id: 1003,
    name: 'لوز',
    price: 85000,
    category: 'savory'
  },


  //شوكولا
  {
    id: 1,
    name: 'اكسرتا مرة 4كغ سادة ذهيب ديلوكس',
    price: 160000,
    category: 'chocolate'
  },
  {
    id: 2,
    name: 'امواج سادة 3كغ سادة ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 3,
    name: 'ايفا سادة 3.5كغ سادة ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 4,
    name: 'دلة قهوة 4كغ سادة ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 5,
    name: 'سبيكة ب ب سادة 3كغ زهري ديلوكس',
    price: 130000,
    category: 'chocolate'
  },
  {
    id: 6,
    name: 'سبيكة رقيقة سادة 3كغ ذهيب ديلوكس',
    price: 130000,
    category: 'chocolate'
  },
  {
    id: 7,
    name: 'سبيكة سادة 4كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 8,
    name: 'ستارز سادة 3كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 9,
    name: 'سوبر ديلوكس 4كغ سادة ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 10,
    name: 'ليلَك سادة 4كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 11,
    name: 'مرمر قهوة 4كغ سادة ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 12,
    name: 'هلال 3كغ سادة ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 13,
    name: 'فنجان سادة 2كغ ذهيب ديلوكس',
    price: 130000,
    category: 'chocolate'
  },
  {
    id: 14,
    name: 'قلب شريطة سادة 3كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 15,
    name: 'قلبكبري سادة 3كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 16,
    name: 'ظرف ب ب سادة ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 17,
    name: 'بريسو قهوة 4كغ ديلوكس برونز',
    price: 130000,
    category: 'chocolate'
  },
  {
    id: 18,
    name: 'بيضوية كرانش 2.5كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 19,
    name: 'روزا صغيرة كرانش 3كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 20,
    name: 'روزا كبيرة كرانش 3كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 21,
    name: 'سبيكة كرانش 3كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 22,
    name: 'مربعة كبيرة كرانش 3كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 23,
    name: 'ابجو صغيرة 2.5كغ ذهيب كريمي البندق ديلوكس',
    price: 130000,
    category: 'chocolate'
  },
  {
    id: 24,
    name: 'ابجو كبيرة 3كغ فضي كريمي البندق ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 25,
    name: 'برنس 3.5كغ فضي كريمي البندق ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 26,
    name: 'فوال بالسيه 2كغ ذهيب كريمي الحليب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 27,
    name: 'فيوان 3كغ فضي كريمي البندق ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 28,
    name: 'كايل كريمي نسكافيه 3.5كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 29,
    name: 'كولدن عجائن 3.5كغ فضي كريمي البندق ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 30,
    name: 'مربعة صغيرة ب. ب 3.5كغ زهري كريمي البندق ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 31,
    name: 'هرم عجائن 3كغ ذهيب كريمي البندق ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 32,
    name: 'مربعة كبيرة 4كغ ذهيب كريمي الحليب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 33,
    name: 'مربعة كبيرة تخرج 4كغ كريمي الحليب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 34,
    name: 'اببلز كريمي الشوكولا 3كغ ديلوكس',
    price: 150000,
    category: 'chocolate'
  },
  {
    id: 35,
    name: 'لوزة كريمي اللوز 2.5كغ ديلوكس',
    price: 150000,
    category: 'chocolate'
  },
  {
    id: 36,
    name: 'هرم مربعة كريمي النسكافيه 3كغ ديلوكس',
    price: 150000,
    category: 'chocolate'
  },
  {
    id: 37,
    name: 'مثلث صغير كريمي البندق 3كغ ديلوكس',
    price: 150000,
    category: 'chocolate'
  },
  {
    id: 38,
    name: 'مثلث صغير كريمي البندق كرتون',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 39,
    name: 'تويل عبيد 2.5كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 40,
    name: 'روشيه عبيد 2.5كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 41,
    name: 'عرايسية عبيد 2كغ ذهيب ديلوكس',
    price: 130000,
    category: 'chocolate'
  },
  {
    id: 42,
    name: 'غربس عبيد 3.5كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 43,
    name: 'كاردينيا عبيد 2كغ ذهيب ديلوكس',
    price: 130000,
    category: 'chocolate'
  },
  {
    id: 44,
    name: 'كروكان أصابع 3.5كغ ذهيب ديلوكس',
    price: 100000,
    category: 'chocolate'
  },
  {
    id: 45,
    name: 'كيم عبيد 3.5كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 46,
    name: 'المي عبيد 1.5كغ ذهيب ديلوكس',
    price: 130000,
    category: 'chocolate'
  },
  {
    id: 47,
    name: 'مربعة عبيد 1.5كغ أخضر ديلوكس',
    price: 130000,
    category: 'chocolate'
  },
  {
    id: 48,
    name: 'بودي ويفر بندق 1.5كغ ذهيب ديلوكس',
    price: 160000,
    category: 'chocolate'
  },
  {
    id: 49,
    name: 'بودي ويفر لوز 1.5كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 50,
    name: 'بوين ويفر 1.5كغ أخضر ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 51,
    name: 'بونيتا ويفر 2كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 52,
    name: 'سامبا ويفر 2كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 53,
    name: 'سيكار ويفر 1.5كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 54,
    name: 'كارول ويفر 2.5كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 55,
    name: 'مونتان ويفر 2كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 56,
    name: 'كورنيه ويفر 1.5كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 57,
    name: 'الان عرايس ويفر 3كغ فضي ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 58,
    name: 'مربعة خواتم ويفر 3كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 59,
    name: 'مربعة كورن فلكس 3.5كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 60,
    name: 'مربعة كبيرة الان ب ب ويفر 3كغ زهري ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 61,
    name: 'أورجينال لوز 2.5كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 62,
    name: 'ابجو كبيرة لوز 2.5كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 63,
    name: 'برنس لوز 4كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 64,
    name: 'متر بالسيه لوز 2كغ ذهيب ديلوكس',
    price: 150000,
    category: 'chocolate'
  },
  {
    id: 65,
    name: 'دارك مرة لوز 3.5كغ ذهيب ديلوكس',
    price: 165000,
    category: 'chocolate'
  },
  {
    id: 66,
    name: 'روما كسر لوز 4كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 67,
    name: 'شوسيه كسر لوز 4كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 68,
    name: 'شوسيه وردة لوز 3.5كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 69,
    name: 'المري مرة لوز 4كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 70,
    name: 'مربعة ص ب ب لوز 4كغ زهري ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 71,
    name: 'مربعة كبيرة لوز 4كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 72,
    name: 'انبويل لوز 2كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 73,
    name: 'مرجانة كسر لوز 3كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 74,
    name: 'درميز مطبوع لوز 4كغ بوردو ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 75,
    name: 'سبيكة ب ب لوز 3.5كغ زهري ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 76,
    name: 'ببيونة حبة لوز 2.5كغ ديلوكس',
    price: 150000,
    category: 'chocolate'
  },
  {
    id: 77,
    name: 'بندق تني كسر لوز 2.5كغ ديلوكس',
    price: 150000,
    category: 'chocolate'
  },
  {
    id: 78,
    name: 'تويل برمة بندق 2كغ ذهيب ديلوكس',
    price: 160000,
    category: 'chocolate'
  },
  {
    id: 79,
    name: 'تويل برمة حليب 2كغ أخضر ديلوكس',
    price: 165000,
    category: 'chocolate'
  },
  {
    id: 80,
    name: 'تويل برمة لوز 2كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 81,
    name: 'تويل بالسيه بندق 2كغ ذهيب ديلوكس',
    price: 165000,
    category: 'chocolate'
  },
  {
    id: 82,
    name: 'تويل بالسيه حليب 2كغ أخضر ديلوكس',
    price: 165000,
    category: 'chocolate'
  },
  {
    id: 83,
    name: 'تويل بالسيه لوز 2كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 84,
    name: 'تويل صغيرة لوز 2.5كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 85,
    name: 'تويل صغيرة بندق 2.5كغ ذهيب ديلوكس',
    price: 165000,
    category: 'chocolate'
  },
  {
    id: 86,
    name: 'تويل صغيرة حليب 2.5كغ ديلوكس',
    price: 165000,
    category: 'chocolate'
  },
  {
    id: 87,
    name: 'ابجو صغيرة بندق مبطن 2.5كغ',
    price: 165000,
    category: 'chocolate'
  },
  {
    id: 88,
    name: 'روشيه اكسترا ص بندق 2.5كغ ذهيب ديلوكس',
    price: 165000,
    category: 'chocolate'
  },
  {
    id: 89,
    name: 'روشيه اكسترا ص حليب 2.5كغ أخضر ديلوكس',
    price: 165000,
    category: 'chocolate'
  },
  {
    id: 90,
    name: 'روشيه اكسترا ص لوز 2.5كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 91,
    name: 'روشيه بالسيه بندق 2.5كغ ذهيب ديلوكس',
    price: 160000,
    category: 'chocolate'
  },
  {
    id: 92,
    name: 'روشيه بالسيه حليب 2.5كغ فستقي ديلوكس',
    price: 160000,
    category: 'chocolate'
  },
  {
    id: 93,
    name: 'روشيه بالسيه لوز 2.5كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 94,
    name: 'روشيه جوفريه لوز 2.5كغ ذهيب ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 95,
    name: 'روشيه جوفريه بندق 2.5كغ ديلوكس',
    price: 160000,
    category: 'chocolate'
  },
  {
    id: 96,
    name: 'روشيه جوفريه حليب 2.5كغ ديلوكس',
    price: 165000,
    category: 'chocolate'
  },
  {
    id: 97,
    name: 'أورجينال بندق 2.5كغ ديلوكس ذهيب',
    price: 165000,
    category: 'chocolate'
  },
  {
    id: 98,
    name: 'أورجنال حليب 2.5كغ ديلوكس',
    price: 165000,
    category: 'chocolate'
  },
  {
    id: 99,
    name: 'مرجانة بندق 3كغ ديلوكس',
    price: 160000,
    category: 'chocolate'
  },
  {
    id: 100,
    name: 'مرجانة حليب 3كغ ديلوكس',
    price: 165000,
    category: 'chocolate'
  },
  {
    id: 101,
    name: 'بولز كريمي الحليب 1.5كغ أحمر ديلوكس',
    price: 85000,
    category: 'chocolate'
  },
  {
    id: 102,
    name: 'سيبال 1.5كغ ديلوكس',
    price: 85000,
    category: 'chocolate'
  },
  {
    id: 103,
    name: 'فواكه برمة بالسيه 2كغ كاكاو فضي ديلوكس',
    price: 110000,
    category: 'chocolate'
  },
  {
    id: 104,
    name: 'فواكه أصابع بالسيه 2كغ كاكاو ديلوكس',
    price: 110000,
    category: 'chocolate'
  },
  {
    id: 105,
    name: 'كورات بالسيه حليب 2كغ ذهيب ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 106,
    name: 'كورات جوفريه حليب 3كغ ذهيب ديلوكس',
    price: 115000,
    category: 'chocolate'
  },
  {
    id: 107,
    name: 'أوريو مرة 2كغ ديلوكس',
    price: 115000,
    category: 'chocolate'
  },
  {
    id: 108,
    name: 'روزليتا تشيزكيك 2.5كغ ديلوكس',
    price: 130000,
    category: 'chocolate'
  },
  {
    id: 109,
    name: 'البيل ضيافة',
    price: 170000,
    category: 'chocolate'
  },
  {
    id: 110,
    name: 'الفندر (كريمي البوظة)',
    price: 130000,
    category: 'chocolate'
  },
  {
    id: 111,
    name: 'بيانكا (كسر لوز)',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 112,
    name: 'كويف بني (حبة قهوة)',
    price: 130000,
    category: 'chocolate'
  },
  {
    id: 113,
    name: 'كورات البوريو',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 114,
    name: 'كورات اللوتس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 115,
    name: 'نيوم مين',
    price: 130000,
    category: 'chocolate'
  },
  {
    id: 116,
    name: 'كيانو بوريو',
    price: 130000,
    category: 'chocolate'
  },
  {
    id: 117,
    name: 'بولز خشب صغير 400غ ديلوكس',
    price: 55000,
    category: 'chocolate'
  },
  {
    id: 118,
    name: 'بولز خشب وسط 500غ ديلوكس',
    price: 65000,
    category: 'chocolate'
  },
  {
    id: 119,
    name: 'بولز خشب كبير 700غ ديلوكس',
    price: 85000,
    category: 'chocolate'
  },
  {
    id: 120,
    name: 'قلب صغير 250 غرام خشب ديلوكس',
    price: 55000,
    category: 'chocolate'
  },
  {
    id: 121,
    name: 'قلب كبير 500 غرام خشب ديلوكس',
    price: 75000,
    category: 'chocolate'
  },
  {
    id: 122,
    name: 'خشب نوكا صغيرة 200 غرام ديلوكس',
    price: 40000,
    category: 'chocolate'
  },
  {
    id: 123,
    name: 'خشب نوكا كبيرة 300غرام ديلوكس',
    price: 55000,
    category: 'chocolate'
  },
  {
    id: 124,
    name: 'مدورة خشب سيبال 500 غ ديلوكس',
    price: 85000,
    category: 'chocolate'
  },
  {
    id: 125,
    name: 'مسدسة خشب سيبال 500 غ ديلوكس',
    price: 65000,
    category: 'chocolate'
  },
  {
    id: 126,
    name: 'مربعة نصفين صغيرة خشب سيبال 300 غ ديلوكس',
    price: 45000,
    category: 'chocolate'
  },
  {
    id: 127,
    name: 'مربعة نصفين كبيرة خشب سيبال 600 غ ديلوكس',
    price: 75000,
    category: 'chocolate'
  },
  {
    id: 128,
    name: 'كفرتور 400 غ مرة ديلوكس',
    price: 42000,
    category: 'chocolate'
  },
  {
    id: 129,
    name: 'كفرتور 400 غ حلوة ديلوكس',
    price: 38000,
    category: 'chocolate'
  },
  {
    id: 130,
    name: 'كفرتور 400 غ حليب ديلوكس',
    price: 38000,
    category: 'chocolate'
  },
  {
    id: 131,
    name: 'كفرتور 1كغ مرة ديلوكس',
    price: 90000,
    category: 'chocolate'
  },
  {
    id: 132,
    name: 'كفرتور 1كغ حلوة ديلوكس',
    price: 85000,
    category: 'chocolate'
  },
  {
    id: 133,
    name: 'كفرتور 1كغ حليب ديلوكس',
    price: 85000,
    category: 'chocolate'
  },
  {
    id: 134,
    name: 'شوكولا سائلة 150غ ديلوكس',
    price: 13000,
    category: 'chocolate'
  },
  {
    id: 135,
    name: 'شوكولا سائلة 350 غ ديلوكس معدن',
    price: 28000,
    category: 'chocolate'
  },
  {
    id: 136,
    name: 'شوكولا سائلة 900 غ ديلوكس',
    price: 55000,
    category: 'chocolate'
  },
  {
    id: 137,
    name: 'شوكولا سائلة 650 غ ديلوكس',
    price: 45000,
    category: 'chocolate'
  },
  {
    id: 138,
    name: 'فانوس كبير 400 غ ديلوكس',
    price: 50000,
    category: 'chocolate'
  },
  {
    id: 139,
    name: 'فانوس صغير 200 غ ديلوكس',
    price: 25000,
    category: 'chocolate'
  },
  {
    id: 140,
    name: 'بولز نيو 500غ ديلوكس',
    price: 50000,
    category: 'chocolate'
  },
  {
    id: 141,
    name: 'جوي بولز 500غ ديلوكس',
    price: 55000,
    category: 'chocolate'
  },
  {
    id: 142,
    name: 'شوكولا سائلة حلوة 500غ ديلوكس',
    price: 50000,
    category: 'chocolate'
  },
  {
    id: 143,
    name: 'شوكولا سائلة حليب 500غ ديلوكس',
    price: 70000,
    category: 'chocolate'
  },
  {
    id: 144,
    name: 'شوكولا سائلة مرة 500غ ديلوكس',
    price: 90000,
    category: 'chocolate'
  },
  {
    id: 145,
    name: 'بودي فرييرو بوكس 2.5كغ ديلوكس',
    price: 65000,
    category: 'chocolate'
  },
  {
    id: 146,
    name: 'بولز ستيك باللوز 600غ ديلوكس',
    price: 85000,
    category: 'chocolate'
  },
  {
    id: 147,
    name: 'خنلة بولز 400غ ديلوكس',
    price: 60000,
    category: 'chocolate'
  },
  {
    id: 148,
    name: 'نجمة بولز 600غ ديلوكس',
    price: 85000,
    category: 'chocolate'
  },
  {
    id: 149,
    name: 'مربعة بولز 500غ ديلوكس',
    price: 75000,
    category: 'chocolate'
  },
  {
    id: 150,
    name: 'بيضوية بولز ستيك باللوز 350غ ديلوكس',
    price: 55000,
    category: 'chocolate'
  },
  {
    id: 151,
    name: 'ورد بولز ستيك 400غ ديلوكس',
    price: 60000,
    category: 'chocolate'
  },
  {
    id: 152,
    name: 'امواج راجيه فرط بندق 3كغ ديلوكس',
    price: 185000,
    category: 'chocolate'
  },
  {
    id: 153,
    name: 'د راجيه فرط قهوة 3كغ ديلوكس',
    price: 125000,
    category: 'chocolate'
  },
  {
    id: 154,
    name: 'د راجيه فرط كرانش 2كغ ديلوكس',
    price: 100000,
    category: 'chocolate'
  },
  {
    id: 155,
    name: 'د راجيه فرط لوز 3كغ ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 156,
    name: 'د راجيه فرط زبيب 3كغ ديلوكس',
    price: 100000,
    category: 'chocolate'
  },
  {
    id: 157,
    name: 'د راجيه فرط لوز 3كغ ديلوكس',
    price: 140000,
    category: 'chocolate'
  },
  {
    id: 158,
    name: 'د راجيه كواترو 350غ',
    price: 65000,
    category: 'chocolate'
  },
  {
    id: 159,
    name: 'د راجيه حليب + حلوة + مرة 190غ',
    price: 22000,
    category: 'chocolate'
  },
  {
    id: 160,
    name: 'كفرتور مسريي 5كغ ديلوكس',
    price: 55000,
    category: 'chocolate'
  },
  {
    id: 161,
    name: 'شوكولا لوز 3كغ ديلوكس',
    price: 160000,
    category: 'chocolate'
  },
  {
    id: 162,
    name: 'ملبس شوكولا 3كغ ديلوكس',
    price: 65000,
    category: 'chocolate'
  },
  {
    id: 163,
    name: 'ملبس فري شوكولا 3كغ ديلوكس',
    price: 100000,
    category: 'chocolate'
  },
  {
    id: 164,
    name: 'بيض رز ستار 600غ ديلوكس',
    price: 65000,
    category: 'chocolate'
  },
  {
    id: 165,
    name: 'ميار كورن فلكس 4كغ بنفسجي حلوة',
    price: 65000,
    category: 'chocolate'
  },
  {
    id: 166,
    name: 'ميار ب ب شوكولا 4كغ حلوة كريمي الحليب',
    price: 65000,
    category: 'chocolate'
  },
  {
    id: 167,
    name: 'ميار كريمي القهوة 4كغ أحمر حلوة',
    price: 65000,
    category: 'chocolate'
  },
  {
    id: 168,
    name: 'ميار كريمي البندق 4كغ ذهيب حلوة',
    price: 65000,
    category: 'chocolate'
  },
  {
    id: 169,
    name: 'ميار كرانش 3.5كغ أخضر حلوة',
    price: 65000,
    category: 'chocolate'
  },
  {
    id: 170,
    name: 'ميار كرانش 3.5كغ موف مرة',
    price: 80000,
    category: 'chocolate'
  },
  {
    id: 171,
    name: 'ميار كريمي الحليب 4كغ مساوي مرة',
    price: 80000,
    category: 'chocolate'
  },
  {
    id: 172,
    name: 'اتليا كريمي البندق 4كغ ذهيب ميار',
    price: 80000,
    category: 'chocolate'
  },
  {
    id: 173,
    name: 'ميار قهوة 4كغ أسود مرة',
    price: 80000,
    category: 'chocolate'
  },
  {
    id: 174,
    name: 'ميار خواتم 4كغ حلوة',
    price: 65000,
    category: 'chocolate'
  },
  {
    id: 175,
    name: 'ميار عرايس 4كغ حلوة',
    price: 65000,
    category: 'chocolate'
  },
  {
    id: 176,
    name: 'كارما كريمي البندق 2.5كغ ذهيب ميار',
    price: 90000,
    category: 'chocolate'
  },
  {
    id: 177,
    name: 'ميار قلبكبير سادة ذهيب 3كغ',
    price: 90000,
    category: 'chocolate'
  },
  {
    id: 178,
    name: 'ليا سادة 3كغ ذهيب ميار',
    price: 90000,
    category: 'chocolate'
  },
  {
    id: 179,
    name: 'فرياي سادة 4كغ ذهيب ميار',
    price: 90000,
    category: 'chocolate'
  },
  {
    id: 180,
    name: 'جياان سادة 4كغ أسود ميار',
    price: 90000,
    category: 'chocolate'
  },
  {
    id: 181,
    name: 'ميار مرمر سادة ذهيب 4كغ',
    price: 90000,
    category: 'chocolate'
  },
  {
    id: 182,
    name: 'ميار المري سادة ذهيب 4كغ',
    price: 90000,
    category: 'chocolate'
  },
  {
    id: 183,
    name: 'ميار شوسيه عبيد ذهيب 4كغ',
    price: 90000,
    category: 'chocolate'
  },
  {
    id: 184,
    name: 'ميار تويل عبيد ذهيب 2.5كغ',
    price: 90000,
    category: 'chocolate'
  },
  {
    id: 185,
    name: 'تواب عبيد 3كغ ذهيب ميار',
    price: 90000,
    category: 'chocolate'
  },
  {
    id: 186,
    name: 'روفان عبيد 3كغ ذهيب ميار',
    price: 90000,
    category: 'chocolate'
  },
  {
    id: 187,
    name: 'دالني ويفر كريمي الحليب حلوة 3كغ ميار',
    price: 90000,
    category: 'chocolate'
  },
  {
    id: 188,
    name: 'أماليا ويفر كريمي الحليب 3.5كغ ميار',
    price: 90000,
    category: 'chocolate'
  }
];
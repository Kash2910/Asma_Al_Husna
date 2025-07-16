 document.addEventListener('DOMContentLoaded', function() {
            const namesData = [
                { no: 1, name: 'الله', trans: 'Allah', meaning: 'God, The One and Only', dua_ar: 'اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ سَمَّيْتَ بِهِ نَفْسَكَ أَوْ أَنْزَلْتَهُ فِيْ كِتَابِكَ أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ أَوِ اسْتَأْثَرْتَ بِهِ فِيْ عِلْمِ الْغَيْبِ عِنْدَكَ', dua_en: 'O Allah, I ask You by every Name that You have named Yourself with, revealed in Your Book, taught any one of Your creation, or kept unto Yourself in the knowledge of the unseen that is with You.', ref: 'General invocation, [10]', status: 'General Principle', cat: 'Core' },
                { no: 2, name: 'الرحمن', trans: 'Ar-Rahmān', meaning: 'The Most or Entirely Merciful', dua_ar: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', dua_en: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.', ref: 'Quran 1:1, [2]', status: 'Quranic', cat: 'Mercy & Forgiveness' },
                { no: 3, name: 'الرحيم', trans: 'Ar-Rahīm', meaning: 'The Bestower of Mercy', dua_ar: 'رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنْتَ خَيْرُ الرَّاحِمِينَ', dua_en: 'Our Lord! We have believed, so forgive us, and have mercy on us, for You are the Best of all who show mercy.', ref: 'Quran 23:109, [11]', status: 'Quranic', cat: 'Mercy & Forgiveness' },
                { no: 4, name: 'الملك', trans: 'Al-Malik', meaning: 'The King and Owner of Dominion', dua_ar: 'يَا أَيُّهَا النَّاسُ أَنْتُمُ الْفُقَرَاءُ إِلَى اللَّهِ وَاللَّهُ هُوَ الْغَنِيُّ الْحَمِيدُ', dua_en: 'O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy. (Implicitly acknowledging His Sovereignty)', ref: 'Quran 35:15, [12]', status: 'Quranic', cat: 'Sovereignty' },
                { no: 5, name: 'القدوس', trans: 'Al-Quddūs', meaning: 'The Absolutely Pure', dua_ar: 'سُبْحَانَ الْمَلِكِ الْقُدُّوسِ', dua_en: 'Glory be to the Sovereign, the Most Holy.', ref: 'Sunan Abi Dawud, [13]', status: 'Sahih', cat: 'Perfection' },
                { no: 6, name: 'السلام', trans: 'As-Salām', meaning: 'The Perfection and Giver of Peace', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Perfection' },
                { no: 7, name: 'المؤمن', trans: 'Al-Mu\'min', meaning: 'The One Who gives Emaan and Security', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Protection' },
                { no: 8, name: 'المهيمن', trans: 'Al-Muhaymin', meaning: 'The Guardian, The Witness, The Overseer', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Protection' },
                { no: 9, name: 'العزيز', trans: 'Al-Azīz', meaning: 'The All Mighty', dua_ar: 'قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ وَتُعِزُّ مَنْ تَشَاءُ وَتُذِلُّ مَنْ تَشَاءُ ۖ بِيَدِكَ الْخَيْرُ ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ', dua_en: 'Say, “O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent.”', ref: 'Quran 3:26, [14]', status: 'Quranic', cat: 'Power' },
                { no: 10, name: 'الجبار', trans: 'Al-Jabbār', meaning: 'The Compeller, The Restorer', dua_ar: 'سُبْحَانَ ذِي الْجَبَرُوتِ وَالْمَلَكُوتِ وَالْكِبْرِيَاءِ وَالْعَظَمَةِ', dua_en: 'Glorified is the Owner of all might (jabarūt), dominion, glory, and greatness.', ref: '[15]', status: 'Implied Sahih', cat: 'Power' },
                { no: 11, name: 'المتكبر', trans: 'Al-Mutakabbir', meaning: 'The Supreme, The Majestic', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Power' },
                { no: 12, name: 'الخالق', trans: 'Al-Khāliq', meaning: 'The Creator, The Maker', dua_ar: 'هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ ۖ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ', dua_en: 'He is Allah, the Creator, the Inventor, the Fashioner; to Him belong the best names.', ref: 'Quran 59:24, [2]', status: 'Quranic', cat: 'Creation' },
                { no: 13, name: 'البارئ', trans: 'Al-Bāri\'', meaning: 'The Originator', dua_ar: 'هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ ۖ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ', dua_en: 'He is Allah, the Creator, the Inventor, the Fashioner; to Him belong the best names.', ref: 'Quran 59:24, [2]', status: 'Quranic', cat: 'Creation' },
                { no: 14, name: 'المصور', trans: 'Al-Musawwir', meaning: 'The Fashioner', dua_ar: 'هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ ۖ لَهُ الْأَسْمَاءُ الْحُسْنَىٰ', dua_en: 'He is Allah, the Creator, the Inventor, the Fashioner; to Him belong the best names.', ref: 'Quran 59:24, [2]', status: 'Quranic', cat: 'Creation' },
                { no: 15, name: 'الغفار', trans: 'Al-Ghaffār', meaning: 'The All- and Oft-Forgiving', dua_ar: 'إِنِّي لَغَفَّارٌ لِمَنْ تَابَ وَآمَنَ وَعَمِلَ صَالِحًا ثُمَّ اهْتَدَىٰ', dua_en: 'And verily, I am Al-Ghaffar (the All-Forgiving) for him who repents, believes and does righteousness and is moreover rightly guided.', ref: 'Quran 20:82, [16]', status: 'Quranic', cat: 'Mercy & Forgiveness' },
                { no: 16, name: 'القهار', trans: 'Al-Qahhār', meaning: 'The Subduer, The Ever-Dominating', dua_ar: 'لِمَنِ الْمُلْكُ الْيَوْمَ ۖ لِلَّهِ الْوَاحِدِ الْقَهَّارِ', dua_en: 'Whose is the sovereignty this Day? It is Allah’s, the One, the Paramount.', ref: 'Quran 40:16, [17]', status: 'Quranic', cat: 'Power' },
                { no: 17, name: 'الوهاب', trans: 'Al-Wahhāb', meaning: 'The Bestower of Gifts', dua_ar: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً ۚ إِنَّكَ أَنْتَ الْوَهَّابُ', dua_en: 'Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.', ref: 'Quran 3:8, [18]', status: 'Quranic', cat: 'Provision' },
                { no: 18, name: 'الرزاق', trans: 'Ar-Razzāq', meaning: 'The Provider', dua_ar: 'إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ', dua_en: 'Indeed, it is Allah who is the [continual] Provider, the firm possessor of strength.', ref: 'Quran 51:58, [5]', status: 'Quranic', cat: 'Provision' },
                { no: 19, name: 'الفتاح', trans: 'Al-Fattāh', meaning: 'The Opener, The Judge', dua_ar: 'قُلْ يَجْمَعُ بَيْنَنَا رَبُّنَا ثُمَّ يَفْتَحُ بَيْنَنَا بِالْحَقِّ ۗ وَهُوَ الْفَتَّاحُ الْعَلِيمُ', dua_en: 'Say, “Our Lord will bring us together; then He will judge between us in truth. And He is the Knowing Judge.”', ref: 'Quran 34:26, [19]', status: 'Quranic', cat: 'Justice' },
                { no: 20, name: 'العليم', trans: 'Al-\'Alīm', meaning: 'The All-Knowing, The Omniscient', dua_ar: 'رَّبِّ زِدْنِى عِلْمًا', dua_en: 'My Lord! Increase me in knowledge.', ref: 'Quran 20:114, [20]', status: 'Quranic', cat: 'Knowledge' },
                { no: 21, name: 'القابض', trans: 'Al-Qābid', meaning: 'The Withholder', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Sovereignty' },
                { no: 22, name: 'الباسط', trans: 'Al-Bāsit', meaning: 'The Extender, The Expander', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Sovereignty' },
                { no: 23, name: 'الخافض', trans: 'Al-Khāfid', meaning: 'The Reducer, The Abaser', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Sovereignty' },
                { no: 24, name: 'الرافع', trans: 'Ar-Rāfi\'', meaning: 'The Exalter, The Elevator', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Sovereignty' },
                { no: 25, name: 'المعز', trans: 'Al-Mu\'izz', meaning: 'The Honourer, The Bestower', dua_ar: 'قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ وَتُعِزُّ مَنْ تَشَاءُ وَتُذِلُّ مَنْ تَشَاءُ ۖ بِيَدِكَ الْخَيْرُ ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ', dua_en: 'Say, “O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent.”', ref: 'Quran 3:26, [14]', status: 'Quranic', cat: 'Sovereignty' },
                { no: 26, name: 'المذل', trans: 'Al-Muzill', meaning: 'The Dishonourer, The Humiliator', dua_ar: 'قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ وَتُعِزُّ مَنْ تَشَاءُ وَتُذِلُّ مَنْ تَشَاءُ ۖ بِيَدِكَ الْخَيْرُ ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ', dua_en: 'Say, “O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent.”', ref: 'Quran 3:26, [14]', status: 'Quranic', cat: 'Sovereignty' },
                { no: 27, name: 'السميع', trans: 'As-Samī\'', meaning: 'The All-Hearing', dua_ar: 'رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ', dua_en: 'Our Lord, accept [this] from us. Indeed You are the Hearing, the Knowing.', ref: 'Quran 2:127, [21]', status: 'Quranic', cat: 'Knowledge' },
                { no: 28, name: 'البصير', trans: 'Al-Basīr', meaning: 'The All-Seeing', dua_ar: 'وَاللَّهُ بَصِيرٌ بِالْعِبَادِ', dua_en: 'Allah is Seer of His bondmen (slaves).', ref: 'Quran 3:15, [22]', status: 'Quranic', cat: 'Knowledge' },
                { no: 29, name: 'الحكم', trans: 'Al-Hakam', meaning: 'The Judge, The Giver of Justice', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Justice' },
                { no: 30, name: 'العدل', trans: 'Al-\'Adl', meaning: 'The Utterly Just', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Justice' },
                { no: 31, name: 'اللطيف', trans: 'Al-Latīf', meaning: 'The Subtle One, The Most Gentle', dua_ar: 'يَا لَطِيفُ', dua_en: 'O Subtle One.', ref: '[23]', status: 'Practice/Example', cat: 'Perfection' },
                { no: 32, name: 'الخبير', trans: 'Al-Khabīr', meaning: 'The Acquainted, The All-Aware', dua_ar: 'إِنَّ اللَّهَ لَطِيفٌ خَبِيرٌ', dua_en: 'Indeed, Allah is Subtle and Acquainted.', ref: 'Quran 31:16, [24]', status: 'Quranic', cat: 'Knowledge' },
                { no: 33, name: 'الحليم', trans: 'Al-Halīm', meaning: 'The Most Forbearing', dua_ar: 'لَا إِلَٰهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ', dua_en: 'There is no God but Allah, the Mighty, the Gentle.', ref: 'Sahih al-Bukhari, [7]', status: 'Sahih', cat: 'Mercy & Forgiveness' },
                { no: 34, name: 'العظيم', trans: 'Al-\'Aẓīm', meaning: 'The Magnificent, The Supreme', dua_ar: 'لَا إِلَٰهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ', dua_en: 'There is no God but Allah, the Mighty, the Gentle.', ref: 'Sahih al-Bukhari, [7]', status: 'Sahih', cat: 'Power' },
                { no: 35, name: 'الغفور', trans: 'Al-Ghafūr', meaning: 'The Forgiving, The Exceedingly Forgiving', dua_ar: 'قَالَا رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ', dua_en: 'Our Master, we have wronged ourselves! If You do not forgive us and have mercy upon us, we will surely be among the losers.', ref: 'Quran 7:23, [25]', status: 'Quranic', cat: 'Mercy & Forgiveness' },
                { no: 36, name: 'الشكور', trans: 'Ash-Shakūr', meaning: 'The Most Appreciative', dua_ar: 'إِنَّهُ غَفُورٌ شَكُورٌ', dua_en: 'Indeed He is The All Encompassing Forgiver and The Rewarded of Thankfulness.', ref: 'Quran 35:30, [25]', status: 'Quranic', cat: 'Perfection' },
                { no: 37, name: 'العلي', trans: 'Al-\'Alī', meaning: 'The Most High, The Exalted', dua_ar: 'ذَٰلِكَ بِأَنَّ اللَّهَ هُوَ الْحَقُّ وَأَنَّ مَا يَدْعُونَ مِن دُونِهِ الْبَاطِلُ وَأَنَّ اللَّهَ هُوَ الْعَلِيُّ الْكَبِيرُ', dua_en: 'That is because Allah is the Truth, and that what they call upon other than Him is falsehood, and because Allah is the Most High, the Grand.', ref: 'Quran 31:30, [26]', status: 'Quranic', cat: 'Power' },
                { no: 38, name: 'الكبير', trans: 'Al-Kabīr', meaning: 'The Greatest, The Most Grand', dua_ar: 'اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا', dua_en: 'Allah is the Greatest of the great and all praise is due to Him. Hallowed be Allah, in the morning and evening.', ref: 'Sahih Muslim, [27]', status: 'Sahih', cat: 'Power' },
                { no: 39, name: 'الحفيظ', trans: 'Al-Hafīz', meaning: 'The Preserver, The All-Heedful and All-Protecting', dua_ar: 'فَاللَّهُ خَيْرٌ حَافِظًا ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ', dua_en: 'But Allah is the best guardian, and He is the most merciful of the merciful.', ref: 'Quran 12:64, [28]', status: 'Quranic', cat: 'Protection' },
                { no: 40, name: 'المقيت', trans: 'Al-Muqīt', meaning: 'The Sustainer, The Maintainer', dua_ar: 'وَكَانَ اللَّهُ عَلَىٰ كُلِّ شَيْءٍ مُقِيتًا', dua_en: 'And Allah Nourishes all things.', ref: 'Quran 4:85, [29]', status: 'Quranic', cat: 'Provision' },
                { no: 41, name: 'الحسيب', trans: 'Al-Hasīb', meaning: 'The Reckoner', dua_ar: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', dua_en: 'Allah (Alone) is Sufficient for us, and He is the Best Disposer of affairs (for us).', ref: 'Quran 3:173, [30, 31]', status: 'Sahih (Al-Bukhari)', cat: 'Justice' },
                { no: 42, name: 'الجليل', trans: 'Al-Jalīl', meaning: 'The Majestic', dua_ar: 'يَا ذَا الْجَلَالِ وَالْإِكْرَامِ', dua_en: 'O Lord of Majesty and Honour.', ref: 'Tirmidhi, [3]', status: 'Hasan', cat: 'Power' },
                { no: 43, name: 'الكريم', trans: 'Al-Karīm', meaning: 'The Most Generous, The Most Esteemed', dua_ar: 'اقْرَأْ وَرَبُّكَ الْأَكْرَمُ', dua_en: 'Recite, and your Lord is the most Generous.', ref: 'Quran 96:3, [2]', status: 'Quranic', cat: 'Provision' },
                { no: 44, name: 'الرقيب', trans: 'Ar-Raqīb', meaning: 'The Watchful, The All-Watchful', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Knowledge' },
                { no: 45, name: 'المجيب', trans: 'Al-Mujīb', meaning: 'The Responsive, The Answerer', dua_ar: 'إِنَّ رَبِّي قَرِيبٌ مُّجِيبٌ', dua_en: 'Indeed, my Lord is near and responsive.', ref: 'Quran 11:61, [32]', status: 'Quranic', cat: 'Mercy & Forgiveness' },
                { no: 46, name: 'الواسع', trans: 'Al-Wāsi\'', meaning: 'The All-Encompassing, The Boundless', dua_ar: 'وَاللَّهُ وَاسِعٌ عَلِيمٌ', dua_en: 'And Allah is all-Encompassing and Knowing.', ref: 'Quran 2:115, [33]', status: 'Quranic', cat: 'Perfection' },
                { no: 47, name: 'الحكيم', trans: 'Al-Hakīm', meaning: 'The All-Wise', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Knowledge' },
                { no: 48, name: 'الودود', trans: 'Al-Wadūd', meaning: 'The Most Loving', dua_ar: 'وَهُوَ الْغَفُورُ الْوَدُودُ', dua_en: 'And He is the Forgiving, the Affectionate.', ref: 'Quran 85:14, [34]', status: 'Quranic', cat: 'Mercy & Forgiveness' },
                { no: 49, name: 'المجيد', trans: 'Al-Majīd', meaning: 'The Glorious, The Most Honorable', dua_ar: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ', dua_en: 'O Allah: bless Muhammad and his family as Thou didst bless the family of Ibrahim. Verily Thou art Praiseworthy and Glorious.', ref: 'Sahih Muslim, [35]', status: 'Sahih', cat: 'Perfection' },
                { no: 50, name: 'الباعث', trans: 'Al-Bā\'ith', meaning: 'The Infuser of New Life', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Creation' },
                { no: 51, name: 'الشهيد', trans: 'Ash-Shahīd', meaning: 'The All Observing Witnessing', dua_ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الشَّهَادَةَ', dua_en: 'O Allah I ask you for Martyrdom.', ref: 'Sahih Muslim 1908 & 1909, [36]', status: 'Sahih', cat: 'Knowledge' },
                { no: 52, name: 'الحق', trans: 'Al-Haqq', meaning: 'The Absolute Truth', dua_ar: 'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ وَأَرِنَا الْبَاطِلَ بَاطِلًا وَارْزُقْنَا اجْتِنَابَهُ', dua_en: 'O Allah! Enable me to see the Truth as Truth and give me the ability to follow it. And enable me to see the falsehood as false and give me the ability to refrain from it.', ref: '[37]', status: 'Implied Sahih/Hasan', cat: 'Justice' },
                { no: 53, name: 'الوكيل', trans: 'Al-Wakīl', meaning: 'The Trustee, The Disposer of Affairs', dua_ar: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', dua_en: 'Allah (Alone) is Sufficient for us, and He is the Best Disposer of affairs (for us).', ref: 'Quran 3:173, [30, 31]', status: 'Sahih (Al-Bukhari)', cat: 'Protection' },
                { no: 54, name: 'القوي', trans: 'Al-Qawiyy', meaning: 'The All-Strong', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Power' },
                { no: 55, name: 'المتين', trans: 'Al-Matīn', meaning: 'The Firm, The Steadfast', dua_ar: 'إِنَّ اللَّهَ هُوَ الرَّزَّاقُ ذُو الْقُوَّةِ الْمَتِينُ', dua_en: 'Indeed, it is Allah who is the [continual] Provider, the firm possessor of strength.', ref: 'Quran 51:58, [38]', status: 'Quranic', cat: 'Power' },
                { no: 56, name: 'الولي', trans: 'Al-Walī', meaning: 'The Protecting Associate', dua_ar: 'أَنْتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ', dua_en: 'You are my protector in this world and in the Hereafter.', ref: 'Quran 12:101, [39]', status: 'Quranic', cat: 'Protection' },
                { no: 57, name: 'الحميد', trans: 'Al-Hamīd', meaning: 'The Praiseworthy', dua_ar: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', dua_en: 'All praise is due to Allah, Lord of the worlds.', ref: 'Quran 1:2, [40]', status: 'Quranic', cat: 'Perfection' },
                { no: 58, name: 'المحصي', trans: 'Al-Muhsī', meaning: 'The All-Enumerating, The Counter', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Knowledge' },
                { no: 59, name: 'المبدئ', trans: 'Al-Mubdi\'', meaning: 'The Originator, The Initiator', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Creation' },
                { no: 60, name: 'المعيد', trans: 'Al-Mu\'īd', meaning: 'The Restorer, The Reinstater', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Creation' },
                { no: 61, name: 'المحيي', trans: 'Al-Muhyī', meaning: 'The Giver of Life', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Creation' },
                { no: 62, name: 'المميت', trans: 'Al-Mumīt', meaning: 'The Creator of Death', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Creation' },
                { no: 63, name: 'الحي', trans: 'Al-Hayy', meaning: 'The Ever-Living', dua_ar: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ', dua_en: 'O Ever-Living, O Sustainer of all existence, in Your mercy I seek relief!', ref: 'Al-Hakim, Tirmidhi, [7, 41]', status: 'Sahih', cat: 'Perfection' },
                { no: 64, name: 'القيوم', trans: 'Al-Qayyūm', meaning: 'The Sustainer, The Self-Subsisting', dua_ar: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ', dua_en: 'O Ever-Living, O Sustainer of all existence, in Your mercy I seek relief!', ref: 'Al-Hakim, Tirmidhi, [7, 41]', status: 'Sahih', cat: 'Perfection' },
                { no: 65, name: 'الواجد', trans: 'Al-Wājid', meaning: 'The Perceiver', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Knowledge' },
                { no: 66, name: 'الماجد', trans: 'Al-Mājid', meaning: 'The Illustrious, The Magnificent', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Perfection' },
                { no: 67, name: 'الواحد', trans: 'Al-Wāhid', meaning: 'The One, The Indivisible', dua_ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ يَا اللَّهُ بِأَنَّكَ الْوَاحِدُ الْأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ أَنْ تَغْفِرَ لِي ذُنُوبِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ', dua_en: 'O Allah, I ask of You, O Allah, as You are the One, the Only, the Self-Sufficient Master, Who begets not nor was He begotten, and there is none equal or comparable to Him, forgive me my sins, for You are the Oft-Forgiving, Most Merciful.', ref: 'Sunan Nasai 1301, Sunan Abi Dawud 977, [42]', status: 'Sahih', cat: 'Core' },
                { no: 68, name: 'الأحد', trans: 'Al-Ahad', meaning: 'The Unique, The Only One', dua_ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ يَا اللَّهُ بِأَنَّكَ الْوَاحِدُ الْأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ أَنْ تَغْفِرَ لِي ذُنُوبِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ', dua_en: 'O Allah, I ask of You, O Allah, as You are the One, the Only, the Self-Sufficient Master, Who begets not nor was He begotten, and there is none equal or comparable to Him, forgive me my sins, for You are the Oft-Forgiving, Most Merciful.', ref: 'Sunan Nasai 1301, Sunan Abi Dawud 977, [42]', status: 'Sahih', cat: 'Core' },
                { no: 69, name: 'الصمد', trans: 'As-Samad', meaning: 'The Eternal, Satisfier of Needs', dua_ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ يَا اللَّهُ بِأَنَّكَ الْوَاحِدُ الْأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ أَنْ تَغْفِرَ لِي ذُنُوبِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ', dua_en: 'O Allah, I ask of You, O Allah, as You are the One, the Only, the Self-Sufficient Master, Who begets not nor was He begotten, and there is none equal or comparable to Him, forgive me my sins, for You are the Oft-Forgiving, Most Merciful.', ref: 'Sunan Nasai 1301, Sunan Abi Dawud 977, [42]', status: 'Sahih', cat: 'Core' },
                { no: 70, name: 'القادر', trans: 'Al-Qādir', meaning: 'The Omnipotent', dua_ar: 'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ', dua_en: 'There is no true god except Allah. He is One and He has no partner with Him, His is the sovereignty and His is the praise, and He is Omnipotent.', ref: 'Sahih Muslim 597, [43]', status: 'Sahih', cat: 'Power' },
                { no: 71, name: 'المقتدر', trans: 'Al-Muqtadir', meaning: 'The Powerful', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Power' },
                { no: 72, name: 'المقدم', trans: 'Al-Muqaddim', meaning: 'The Expediter, The Promoter', dua_ar: 'اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ وَأَنْتَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', dua_en: 'O Allah, forgive me for what I have done in the past and what I will do in the future, what I have done in secret and what I have done openly, and whatever You know about me better than I do. You are the One Who raises and lowers people\'s status, and and You are Able to do all things.', ref: 'Sahih al-Bukhari, Sahih Muslim, [44]', status: 'Sahih', cat: 'Sovereignty' },
                { no: 73, name: 'المؤخر', trans: 'Al-Mu\'akhkhir', meaning: 'The Delayer', dua_ar: 'اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ وَأَنْتَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', dua_en: 'O Allah, forgive me for what I have done in the past and what I will do in the future, what I have done in secret and what I have done openly, and whatever You know about me better than I do. You are the One Who raises and lowers people\'s status, and and You are Able to do all things.', ref: 'Sahih al-Bukhari, Sahih Muslim, [44]', status: 'Sahih', cat: 'Sovereignty' },
                { no: 74, name: 'الأول', trans: 'Al-Awwal', meaning: 'The First', dua_ar: 'اللَّهُمَّ رَبَّ السَّمَوَاتِ السَّبْعِ وَرَبَّ الْعَرْشِ الْعَظِيمِ رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ مُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ وَالْقُرْآنِ فَالِقَ الْحَبِّ وَالنَّوَى أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ اقْضِ عَنِّي الدَّيْنَ وَأَغْنِنِي مِنَ الْفَقْرِ', dua_en: 'O Allah, Lord of the heavens, the Earth, and the Mighty Throne! Our Lord and the Lord of all things; who splits the seed and the kernel, who sent down the Torah, the Gospel, and the Criterion (Quran). I seek refuge with You from the evil in everything, all of which you grasp by the forelock. O God! You are the First, so nothing precedes You. You are the Last, so nothing comes after You. You are the Manifest, so nothing comes above You. You are the Hidden, so nothing comes below you. Fulfill our debts for us and enrich us so we will not be poor.', ref: 'Sahih Muslim, [45, 46]', status: 'Sahih', cat: 'Perfection' },
                { no: 75, name: 'الآخر', trans: 'Al-Aakhir', meaning: 'The Last', dua_ar: 'اللَّهُمَّ رَبَّ السَّمَوَاتِ السَّبْعِ وَرَبَّ الْعَرْشِ الْعَظِيمِ رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ مُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ وَالْقُرْآنِ فَالِقَ الْحَبِّ وَالنَّوَى أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ اقْضِ عَنِّي الدَّيْنَ وَأَغْنِنِي مِنَ الْفَقْرِ', dua_en: 'O Allah, Lord of the heavens, the Earth, and the Mighty Throne! Our Lord and the Lord of all things; who splits the seed and the kernel, who sent down the Torah, the Gospel, and the Criterion (Quran). I seek refuge with You from the evil in everything, all of which you grasp by the forelock. O God! You are the First, so nothing precedes You. You are the Last, so nothing comes after You. You are the Manifest, so nothing comes above You. You are the Hidden, so nothing comes below you. Fulfill our debts for us and enrich us so we will not be poor.', ref: 'Sahih Muslim, [45, 46]', status: 'Sahih', cat: 'Perfection' },
                { no: 76, name: 'الظاهر', trans: 'Az-Zāhir', meaning: 'The Manifest, The All-Surpassing', dua_ar: 'اللَّهُمَّ رَبَّ السَّمَوَاتِ السَّبْعِ وَرَبَّ الْعَرْشِ الْعَظِيمِ رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ مُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ وَالْقُرْآنِ فَالِقَ الْحَبِّ وَالنَّوَى أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ اقْضِ عَنِّي الدَّيْنَ وَأَغْنِنِي مِنَ الْفَقْرِ', dua_en: 'O Allah, Lord of the heavens, the Earth, and the Mighty Throne! Our Lord and the Lord of all things; who splits the seed and the kernel, who sent down the Torah, the Gospel, and the Criterion (Quran). I seek refuge with You from the evil in everything, all of which you grasp by the forelock. O God! You are the First, so nothing precedes You. You are the Last, so nothing comes after You. You are the Manifest, so nothing comes above You. You are the Hidden, so nothing comes below you. Fulfill our debts for us and enrich us so we will not be poor.', ref: 'Sahih Muslim, [45, 46]', status: 'Sahih', cat: 'Perfection' },
                { no: 77, name: 'الباطن', trans: 'Al-Bātin', meaning: 'The Hidden One, Knower of the Hidden', dua_ar: 'اللَّهُمَّ رَبَّ السَّمَوَاتِ السَّبْعِ وَرَبَّ الْعَرْشِ الْعَظِيمِ رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ مُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ وَالْقُرْآنِ فَالِقَ الْحَبِّ وَالنَّوَى أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ اقْضِ عَنِّي الدَّيْنَ وَأَغْنِنِي مِنَ الْفَقْرِ', dua_en: 'O Allah, Lord of the heavens, the Earth, and the Mighty Throne! Our Lord and the Lord of all things; who splits the seed and the kernel, who sent down the Torah, the Gospel, and the Criterion (Quran). I seek refuge with You from the evil in everything, all of which you grasp by the forelock. O God! You are the First, so nothing precedes You. You are the Last, so nothing comes after You. You are the Manifest, so nothing comes above You. You are the Hidden, so nothing comes below you. Fulfill our debts for us and enrich us so we will not be poor.', ref: 'Sahih Muslim, [45, 46]', status: 'Sahih', cat: 'Perfection' },
                { no: 78, name: 'الوالي', trans: 'Al-Walī', meaning: 'The Sole Governor', dua_ar: 'أَنْتَ وَلِيِّي فِي الدُّنْيَا وَالْآخِرَةِ', dua_en: 'You are my protector in this world and in the Hereafter.', ref: 'Quran 12:101, [39]', status: 'Quranic', cat: 'Sovereignty' },
                { no: 79, name: 'المتعالي', trans: 'Al-Muta\'ālī', meaning: 'The Self Exalted, The Supreme One', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Power' },
                { no: 80, name: 'البر', trans: 'Al-Barr', meaning: 'The Source of All Goodness', dua_ar: 'إِنَّا كُنَّا مِن قَبْلُ نَدْعُوهُ ۖ إِنَّهُ هُوَ الْبَرُّ الرَّحِيمُ', dua_en: 'Indeed, we used to supplicate Him before. Indeed, it is He who is the Beneficent, the Merciful.', ref: 'Quran 52:28, [47, 48]', status: 'Quranic', cat: 'Perfection' },
                { no: 81, name: 'التواب', trans: 'At-Tawwāb', meaning: 'The Ever-Pardoning, The One Who Accepts Repentance', dua_ar: 'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الْغَفُورُ', dua_en: 'O Lord forgive me and accept my repentance, for You are the Accepter of repentance, the Most-Forgiving.', ref: 'Tirmidhi 2499, Ibn Majah 4251, [49]', status: 'Hasan', cat: 'Mercy & Forgiveness' },
                { no: 82, name: 'المنتقم', trans: 'Al-Muntaqim', meaning: 'The Avenger', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Justice' },
                { no: 83, name: 'العفو', trans: 'Al-\'Afuww', meaning: 'The Pardoner', dua_ar: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي', dua_en: 'O Allah, indeed You are the Pardoner, You love to Pardon, so Pardon us.', ref: '[50]', status: 'Implied Sahih/Hasan', cat: 'Mercy & Forgiveness' },
                { no: 84, name: 'الرؤوف', trans: 'Ar-Ra\'oof', meaning: 'The Most Kind', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Mercy & Forgiveness' },
                { no: 85, name: 'مالك الملك', trans: 'Maalik-al-Mulk', meaning: 'Master of the Dominion, Owner of the Kingdom', dua_ar: 'قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَنْ تَشَاءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَاءُ وَتُعِزُّ مَنْ تَشَاءُ وَتُذِلُّ مَنْ تَشَاءُ ۖ بِيَدِكَ الْخَيْرُ ۖ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ', dua_en: 'Say, “O Allah, Owner of Sovereignty, You give sovereignty to whom You will and You take sovereignty away from whom You will. You honor whom You will and You humble whom You will. In Your hand is [all] good. Indeed, You are over all things competent.”', ref: 'Quran 3:26, [14]', status: 'Quranic', cat: 'Sovereignty' },
                { no: 86, name: 'ذو الجلال والإكرام', trans: 'Thul-Jalaali wal-Ikraam', meaning: 'Possessor of Glory and Honour', dua_ar: 'يَا ذَا الْجَلَالِ وَالْإِكْرَامِ', dua_en: 'O Lord of Majesty and Honour.', ref: 'Tirmidhi, [3]', status: 'Hasan', cat: 'Power' },
                { no: 87, name: 'المقسط', trans: 'Al-Muqsiṭ', meaning: 'The Just One', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Justice' },
                { no: 88, name: 'الجامع', trans: 'Al-Jaami\'', meaning: 'The Gatherer, The Uniter', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Sovereignty' },
                { no: 89, name: 'الغني', trans: 'Al-Ghanī', meaning: 'The Self-Sufficient, The Wealthy', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Provision' },
                { no: 90, name: 'المغني', trans: 'Al-Mughnī', meaning: 'The Enricher', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Provision' },
                { no: 91, name: 'المانع', trans: 'Al-Māni\'', meaning: 'The Withholder', dua_ar: 'اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ', dua_en: 'O Allah, there is none who can withhold what You give, and none may give what You have withheld, and the might of the mighty person cannot benefit him against You.', ref: 'Sahih al-Bukhari, Sahih Muslim, [51]', status: 'Sahih', cat: 'Sovereignty' },
                { no: 92, name: 'الضار', trans: 'Ad-Dhaarr', meaning: 'The Distresser', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Sovereignty' },
                { no: 93, name: 'النافع', trans: 'An-Nāfi\'', meaning: 'The Propitious, The Benefactor', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Sovereignty' },
                { no: 94, name: 'النور', trans: 'An-Nūr', meaning: 'The Light', dua_ar: 'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي لِسَانِي نُورًا، وَاجْعَلْ فِي سَمْعِي نُورًا، وَاجْعَلْ فِي بَصَرِي نُورًا، وَاجْعَلْ مِنْ خَلْفِي نُورًا، وَمِنْ أَمَامِي نُورًا، وَاجْعَلْ مِنْ فَوْقِي نُورًا، وَمِنْ تَحْتِي نُورًا، اللَّهُمَّ أَعْطِنِي نُورًا', dua_en: 'O Allah! Place in my heart, light. Place in my tongue, light. Place in my hearing, light. Place in my sight, light. Place behind me, light. Place before me, light. Place above me, light. Place under me, light. Oh Allah grant me light!', ref: '[52, 53]', status: 'Implied Sahih/Hasan', cat: 'Guidance' },
                { no: 95, name: 'الهادي', trans: 'Al-Hādī', meaning: 'The Guide', dua_ar: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ', dua_en: 'O Allah, guide me among those You have guided.', ref: '[54, 55]', status: 'Implied Sahih/Hasan', status: 'Implied Sahih/Hasan', cat: 'Guidance' },
                { no: 96, name: 'البديع', trans: 'Al-Badī\'', meaning: 'The Incomparable Originator', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Creation' },
                { no: 97, name: 'الباقي', trans: 'Al-Bāqī', meaning: 'The Ever-Lasting', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Perfection' },
                { no: 98, name: 'الوارث', trans: 'Al-Wārith', meaning: 'The Inheritor', dua_ar: 'رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ', dua_en: 'My Lord, do not leave me alone (with no heir), while You are the best of Inheritors.', ref: 'Quran 21:89, [56]', status: 'Quranic', cat: 'Sovereignty' },
                { no: 99, name: 'الرشيد', trans: 'Ar-Rashīd', meaning: 'The Guide to the Right Path', dua_ar: '', dua_en: '', ref: 'Mentioned in lists, [5, 9]', status: 'N/A', cat: 'Guidance' },
            ];

            const namesGrid = document.getElementById('names-grid');
            const filterContainer = document.getElementById('filter-container');
            const searchInput = document.getElementById('search-input');
            const noResults = document.getElementById('no-results');
            const modal = document.getElementById('modal');
            const modalContent = document.getElementById('modal-content');

            const categories = ['All', ...new Set(namesData.map(item => item.cat))].filter(Boolean); // Filter out undefined/null categories
            let activeFilter = 'All';

            function renderNames(filteredData) {
                namesGrid.innerHTML = '';
                if(filteredData.length === 0){
                    noResults.classList.remove('hidden');
                } else {
                     noResults.classList.add('hidden');
                }
                filteredData.forEach(name => {
                    const card = document.createElement('div');
                    card.className = 'name-card p-4 rounded-lg text-center cursor-pointer card';
                    card.innerHTML = `
                        <p class="font-amiri text-2xl">${name.name}</p>
                        <p class="text-sm text-gray-600">${name.trans}</p>
                    `;
                    card.addEventListener('click', () => showModal(name));
                    namesGrid.appendChild(card);
                });
            }

            function renderFilters() {
                filterContainer.innerHTML = ''; // Clear existing filters
                categories.forEach(cat => {
                    const button = document.createElement('button');
                    button.className = 'btn-filter px-4 py-2 rounded-full text-sm font-semibold';
                    if (cat === 'All') button.classList.add('active');
                    button.textContent = cat;
                    button.addEventListener('click', () => {
                        activeFilter = cat;
                        document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
                        button.classList.add('active');
                        filterAndRender();
                    });
                    filterContainer.appendChild(button);
                });
            }

            function filterAndRender() {
                const searchTerm = searchInput.value.toLowerCase();
                let filtered = namesData;

                if (activeFilter !== 'All') {
                    filtered = filtered.filter(name => name.cat === activeFilter);
                }

                if (searchTerm) {
                    filtered = filtered.filter(name => 
                        name.trans.toLowerCase().includes(searchTerm) || 
                        name.meaning.toLowerCase().includes(searchTerm) ||
                        name.name.includes(searchTerm) ||
                        (name.dua_en && name.dua_en.toLowerCase().includes(searchTerm))
                    );
                }
                
                renderNames(filtered);
            }

            function showModal(name) {
                modalContent.innerHTML = `
                    <div class="p-6 md:p-8">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="font-amiri text-5xl text-gray-800">${name.name}</h3>
                                <p class="text-2xl text-gray-600">${name.trans}</p>
                                <p class="mt-2 text-lg text-[#C0A080] font-bold">${name.meaning}</p>
                            </div>
                            <button id="close-modal" class="text-2xl text-gray-500 hover:text-gray-800">&times;</button>
                        </div>
                        <div class="mt-6 border-t pt-6">
                            ${name.dua_ar ? `
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-bold text-gray-700 mb-2">Associated Supplication:</h4>
                                <p class="font-amiri text-2xl text-right leading-relaxed mb-4">${name.dua_ar}</p>
                                <p class="text-gray-600 italic">"${name.dua_en}"</p>
                                <p class="text-xs text-gray-400 mt-4">Source: ${name.ref} | Status: <span class="font-semibold">${name.status}</span></p>
                            </div>
                            ` : `
                            <p class="text-gray-500 italic">No specific narrated du'a found in the provided material. The general principle of invoking Allah by His attributes applies.</p>
                            `}
                        </div>
                    </div>
                `;
                modal.classList.remove('hidden');
                document.getElementById('close-modal').addEventListener('click', () => modal.classList.add('hidden'));
            }

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                }
            });

            searchInput.addEventListener('keyup', filterAndRender);
            
            function createSourceChart() {
                const sourceCounts = namesData.reduce((acc, name) => {
                    const status = name.status || 'N/A';
                    acc[status] = (acc[status] || 0) + 1;
                    return acc;
                }, {});

                const labels = Object.keys(sourceCounts).map(label => {
                    if (label.length > 16) {
                        return label.split(' ').reduce((acc, word) => {
                            if (acc.length === 0 || (acc[acc.length - 1] + ' ' + word).length > 16) {
                                acc.push(word);
                            } else {
                                acc[acc.length - 1] += ' ' + word;
                            }
                            return acc;
                        }, []);
                    }
                    return label;
                });

                const ctx = document.getElementById('sourceChart').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Number of Names',
                            data: Object.values(sourceCounts),
                            backgroundColor: [
                                'rgba(192, 160, 128, 0.6)',
                                'rgba(128, 160, 192, 0.6)',
                                'rgba(160, 192, 128, 0.6)',
                                'rgba(192, 128, 160, 0.6)',
                                'rgba(128, 192, 160, 0.6)',
                                'rgba(160, 128, 192, 0.6)',
                                'rgba(100, 100, 100, 0.6)' // For N/A
                            ],
                            borderColor: [
                                'rgba(192, 160, 128, 1)',
                                'rgba(128, 160, 192, 1)',
                                'rgba(160, 192, 128, 1)',
                                'rgba(192, 128, 160, 1)',
                                'rgba(128, 192, 160, 1)',
                                'rgba(160, 128, 192, 1)',
                                'rgba(100, 100, 100, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        indexAxis: 'y',
                        scales: {
                            x: {
                                beginAtZero: true
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                callbacks: {
                                    title: function(tooltipItems) {
                                        const item = tooltipItems[0];
                                        let label = item.chart.data.labels[item.dataIndex];
                                        if (Array.isArray(label)) {
                                            return label.join(' ');
                                        } else {
                                            return label;
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
            }

            renderFilters();
            filterAndRender();
            createSourceChart();
        });
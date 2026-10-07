const copy = {
  en: {
    generalSafetyTitle: 'Pranayama safety',
    generalSafety: 'Pranayama is not suitable for everyone. If you are pregnant, have a heart or lung condition, high blood pressure, a seizure disorder, a history of fainting, or have recently had surgery or a serious medical problem, consult a healthcare professional before practicing breath-control exercises. Never force your breathing. Stop if you experience dizziness, faintness, chest pain, unusual shortness of breath, or other concerning symptoms.',
    optionalHold: 'Optional: include only a brief, comfortable pause after an inhale. Breath retention is off by default; never force it.',
    gentleFallback: {
      name: 'Gentle Breathing',
      subtitle: 'Comforting breathing with no breath retention',
      guidance: 'Let your breathing happen naturally. If it feels comfortable, allow the exhale to be a little longer. There is no need to count or hold your breath.',
      safety: 'Breathe normally and comfortably. Stop if you feel unwell.',
    },
    practices: {
      'nadi-shodhana': {
        name: 'Nadi Shodhana', subtitle: 'Alternate Nostril Breathing', category: 'Gentle',
        duration: '3–5 minutes', beginnerGuidance: '5 rounds', retention: 'Optional, OFF by default', optionalRetention: true,
        instructions: [
          'Sit comfortably with your back relaxed and upright.',
          'Close your eyes and take a normal breath.',
          'Gently close the right nostril with the right thumb.',
          'Inhale slowly through the left nostril.',
          'Close the left nostril with the ring finger.',
          'Release the right nostril and exhale slowly through the right.',
          'Inhale through the right.',
          'Close the right nostril.',
          'Release the left and exhale through the left.',
          'This completes one round.',
        ],
        safety: 'Breathe slowly and comfortably. Never force the inhale, exhale, or breath hold.',
      },
      bhramari: {
        name: 'Bhramari', subtitle: 'Humming Bee Breath', category: 'Gentle',
        duration: '2–3 minutes', beginnerGuidance: '5 repetitions', retention: 'None', optionalRetention: false,
        instructions: [
          'Sit comfortably and close your eyes.',
          'Take a slow breath in through your nose.',
          'Keep your mouth gently closed.',
          'Slowly exhale while making a soft "mmmm" humming sound.',
          'Notice the gentle vibration.',
          'When the exhale finishes, breathe normally.',
          'Repeat comfortably.',
        ],
        safety: 'Keep the humming soft and comfortable. Do not strain your throat or hold your breath.',
      },
      ujjayi: {
        name: 'Ujjayi', subtitle: 'Gentle Ocean Breath', category: 'Gentle',
        duration: '2–5 minutes', beginnerGuidance: '5–10 breaths', retention: 'Optional, OFF by default', optionalRetention: true,
        instructions: [
          'Sit comfortably and relax your shoulders.',
          'Breathe slowly through your nose.',
          'Gently narrow the back of the throat.',
          'Allow a soft ocean-like sound.',
          'Keep the breathing slow and smooth.',
          'Continue only for comfortable breaths.',
        ],
        safety: 'The sound should be quiet and comfortable. Do not squeeze your throat or force the breath.',
      },
      kapalabhati: {
        name: 'Kapalabhati', subtitle: 'Active Exhalation Practice', category: 'Vigorous',
        duration: '1–2 rounds', beginnerGuidance: '10–15 gentle strokes', rounds: '1–2', restBetweenRounds: '30–60 seconds', retention: 'OFF', optionalRetention: false,
        instructions: [
          'Sit upright comfortably.',
          'Take a normal breath in.',
          'Make a short, active exhalation using the abdominal muscles.',
          'Allow the inhalation to happen naturally.',
          'Repeat at a comfortable pace.',
          'Stop the round and return to normal breathing.',
        ],
        safety: 'This is a more vigorous breathing practice. Do not force the breath or add breath retention. Stop if you feel dizzy, faint, short of breath, or uncomfortable.',
      },
      bhastrika: {
        name: 'Bhastrika', subtitle: 'Bellows Breath', category: 'Vigorous',
        duration: '1–2 rounds', beginnerGuidance: '5–10 comfortable breaths', rounds: '1–2', restBetweenRounds: '30–60 seconds', retention: 'OFF', optionalRetention: false,
        instructions: [
          'Sit comfortably with your spine upright.',
          'Take a comfortable breath in.',
          'Breathe out actively.',
          'Breathe in actively.',
          'Continue with controlled rhythmic breathing.',
          'Stop if uncomfortable and return to normal breathing.',
        ],
        safety: 'This is a vigorous breathing practice. Do not force the breathing or add breath retention. Stop if you feel dizzy, faint, short of breath, or uncomfortable.',
      },
    },
  },
  hi: {
    generalSafetyTitle: 'प्राणायाम सुरक्षा',
    generalSafety: 'प्राणायाम सभी के लिए उपयुक्त नहीं है। यदि आप गर्भवती हैं, आपको हृदय या फेफड़ों की समस्या, उच्च रक्तचाप, दौरे की समस्या, बेहोशी का इतिहास है, या हाल ही में सर्जरी या कोई गंभीर स्वास्थ्य समस्या हुई है, तो साँस के अभ्यास से पहले स्वास्थ्य पेशेवर से सलाह लें। साँस पर ज़ोर न डालें। चक्कर, बेहोशी जैसा लगना, सीने में दर्द, असामान्य साँस फूलना या कोई अन्य चिंताजनक लक्षण हो तो रुक जाएँ।',
    optionalHold: 'वैकल्पिक: साँस अंदर लेने के बाद केवल एक छोटी, सहज रोक शामिल करें। साँस रोकना डिफ़ॉल्ट रूप से बंद है; कभी ज़ोर न डालें।',
    gentleFallback: {
      name: 'सहज साँस', subtitle: 'बिना साँस रोके आरामदायक साँस',
      guidance: 'साँस को स्वाभाविक रूप से चलने दें। सहज लगे तो साँस छोड़ना थोड़ा लंबा रखें। गिनने या साँस रोकने की ज़रूरत नहीं है।',
      safety: 'सामान्य और सहज साँस लें। तबीयत ठीक न लगे तो रुक जाएँ।',
    },
    practices: {
      'nadi-shodhana': {
        name: 'नाड़ी शोधन', subtitle: 'बारी-बारी से नासिका श्वास', category: 'सहज',
        duration: '3–5 मिनट', beginnerGuidance: '5 चक्र', retention: 'वैकल्पिक, डिफ़ॉल्ट रूप से बंद', optionalRetention: true,
        instructions: ['पीठ को सहज और सीधा रखते हुए आराम से बैठें।', 'आँखें बंद करें और सामान्य साँस लें।', 'दाएँ अंगूठे से दायीं नासिका को धीरे से बंद करें।', 'बायीं नासिका से धीरे साँस अंदर लें।', 'अनामिका से बायीं नासिका बंद करें।', 'दायीं नासिका खोलें और दायीं ओर से धीरे साँस छोड़ें।', 'दायीं ओर से साँस अंदर लें।', 'दायीं नासिका बंद करें।', 'बायीं नासिका खोलें और बायीं ओर से साँस छोड़ें।', 'यह एक चक्र पूरा हुआ।'],
        safety: 'धीरे और सहज साँस लें। साँस अंदर लेने, बाहर छोड़ने या रोकने पर ज़ोर न डालें।',
      },
      bhramari: {
        name: 'भ्रामरी', subtitle: 'भौंरे जैसी गुनगुनाहट वाली साँस', category: 'सहज',
        duration: '2–3 मिनट', beginnerGuidance: '5 बार', retention: 'नहीं', optionalRetention: false,
        instructions: ['आराम से बैठें और आँखें बंद करें।', 'नाक से धीरे साँस अंदर लें।', 'मुँह को सहजता से बंद रखें।', 'धीरे साँस छोड़ते हुए हल्की "म्म्म" की गुनगुनाहट करें।', 'हल्के कंपन को महसूस करें।', 'साँस छोड़ना पूरा हो तो सामान्य साँस लें।', 'सहजता से दोहराएँ।'],
        safety: 'गुनगुनाहट हल्की और सहज रखें। गले पर ज़ोर न डालें और साँस न रोकें।',
      },
      ujjayi: {
        name: 'उज्जायी', subtitle: 'कोमल समुद्री साँस', category: 'सहज',
        duration: '2–5 मिनट', beginnerGuidance: '5–10 साँसें', retention: 'वैकल्पिक, डिफ़ॉल्ट रूप से बंद', optionalRetention: true,
        instructions: ['आराम से बैठें और कंधों को ढीला रखें।', 'नाक से धीरे साँस लें।', 'गले के पिछले हिस्से को हल्का संकरा करें।', 'समुद्र जैसी धीमी ध्वनि आने दें।', 'साँस को धीमा और सहज रखें।', 'केवल उतनी साँसें लें जितनी सहज लगें।'],
        safety: 'ध्वनि धीमी और सहज होनी चाहिए। गले को न कसें और साँस पर ज़ोर न डालें।',
      },
      kapalabhati: {
        name: 'कपालभाति', subtitle: 'सक्रिय साँस छोड़ने का अभ्यास', category: 'ऊर्जावान',
        duration: '1–2 चक्र', beginnerGuidance: '10–15 हल्के झटके', rounds: '1–2', restBetweenRounds: '30–60 सेकंड', retention: 'बंद', optionalRetention: false,
        instructions: ['आराम से सीधे बैठें।', 'सामान्य साँस अंदर लें।', 'पेट की मांसपेशियों से छोटी, सक्रिय साँस बाहर छोड़ें।', 'साँस अंदर अपने आप आने दें।', 'सहज गति से दोहराएँ।', 'चक्र रोकें और सामान्य साँस लें।'],
        safety: 'यह अधिक ऊर्जावान साँस अभ्यास है। साँस पर ज़ोर न डालें और साँस न रोकें। चक्कर, बेहोशी जैसा लगना, साँस फूलना या असहजता हो तो रुक जाएँ।',
      },
      bhastrika: {
        name: 'भस्त्रिका', subtitle: 'धौंकनी जैसी साँस', category: 'ऊर्जावान',
        duration: '1–2 चक्र', beginnerGuidance: '5–10 सहज साँसें', rounds: '1–2', restBetweenRounds: '30–60 सेकंड', retention: 'बंद', optionalRetention: false,
        instructions: ['रीढ़ सीधी रखते हुए आराम से बैठें।', 'सहज साँस अंदर लें।', 'सक्रिय रूप से साँस बाहर छोड़ें।', 'सक्रिय रूप से साँस अंदर लें।', 'नियंत्रित लय के साथ जारी रखें।', 'असहज लगे तो रुकें और सामान्य साँस लें।'],
        safety: 'यह ऊर्जावान साँस अभ्यास है। साँस पर ज़ोर न डालें और साँस न रोकें। चक्कर, बेहोशी जैसा लगना, साँस फूलना या असहजता हो तो रुक जाएँ।',
      },
    },
  },
  pa: {
    generalSafetyTitle: 'ਪ੍ਰਾਣਾਯਾਮ ਸੁਰੱਖਿਆ',
    generalSafety: 'ਪ੍ਰਾਣਾਯਾਮ ਹਰ ਕਿਸੇ ਲਈ ਢੁੱਕਵਾਂ ਨਹੀਂ ਹੁੰਦਾ। ਜੇ ਤੁਸੀਂ ਗਰਭਵਤੀ ਹੋ, ਤੁਹਾਨੂੰ ਦਿਲ ਜਾਂ ਫੇਫੜਿਆਂ ਦੀ ਸਮੱਸਿਆ, ਹਾਈ ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ, ਦੌਰਿਆਂ ਦੀ ਸਮੱਸਿਆ, ਬੇਹੋਸ਼ ਹੋਣ ਦਾ ਇਤਿਹਾਸ ਹੈ, ਜਾਂ ਹਾਲ ਹੀ ਵਿੱਚ ਸਰਜਰੀ ਜਾਂ ਕੋਈ ਗੰਭੀਰ ਸਿਹਤ ਸਮੱਸਿਆ ਹੋਈ ਹੈ, ਤਾਂ ਸਾਹ ਦੇ ਅਭਿਆਸ ਤੋਂ ਪਹਿਲਾਂ ਸਿਹਤ ਪੇਸ਼ੇਵਰ ਨਾਲ ਸਲਾਹ ਕਰੋ। ਸਾਹ ਉੱਤੇ ਜ਼ੋਰ ਨਾ ਪਾਓ। ਚੱਕਰ, ਬੇਹੋਸ਼ੀ ਜਿਹਾ ਲੱਗਣਾ, ਛਾਤੀ ਵਿੱਚ ਦਰਦ, ਅਸਧਾਰਨ ਸਾਹ ਚੜ੍ਹਨਾ ਜਾਂ ਹੋਰ ਚਿੰਤਾਜਨਕ ਲੱਛਣ ਹੋਣ ਤਾਂ ਰੁਕ ਜਾਓ।',
    optionalHold: 'ਵਿਕਲਪਿਕ: ਸਾਹ ਅੰਦਰ ਲੈਣ ਤੋਂ ਬਾਅਦ ਸਿਰਫ਼ ਇੱਕ ਛੋਟਾ, ਸਹਿਜ ਵਿਰਾਮ ਰੱਖੋ। ਸਾਹ ਰੋਕਣਾ ਮੂਲ ਰੂਪ ਵਿੱਚ ਬੰਦ ਹੈ; ਕਦੇ ਜ਼ੋਰ ਨਾ ਪਾਓ।',
    gentleFallback: {
      name: 'ਸਹਿਜ ਸਾਹ', subtitle: 'ਸਾਹ ਰੋਕੇ ਬਿਨਾਂ ਆਰਾਮਦਾਇਕ ਸਾਹ',
      guidance: 'ਸਾਹ ਨੂੰ ਕੁਦਰਤੀ ਤਰ੍ਹਾਂ ਚੱਲਣ ਦਿਓ। ਜੇ ਸਹਿਜ ਲੱਗੇ ਤਾਂ ਸਾਹ ਬਾਹਰ ਛੱਡਣ ਦਾ ਸਮਾਂ ਥੋੜ੍ਹਾ ਲੰਮਾ ਰੱਖੋ। ਗਿਣਨ ਜਾਂ ਸਾਹ ਰੋਕਣ ਦੀ ਲੋੜ ਨਹੀਂ।',
      safety: 'ਆਮ ਅਤੇ ਸਹਿਜ ਸਾਹ ਲਓ। ਤਬੀਅਤ ਠੀਕ ਨਾ ਲੱਗੇ ਤਾਂ ਰੁਕ ਜਾਓ।',
    },
    practices: {
      'nadi-shodhana': {
        name: 'ਨਾਡੀ ਸ਼ੋਧਨ', subtitle: 'ਵਾਰੀ-ਵਾਰੀ ਨਾਸਿਕਾ ਰਾਹੀਂ ਸਾਹ', category: 'ਸਹਿਜ',
        duration: '3–5 ਮਿੰਟ', beginnerGuidance: '5 ਚੱਕਰ', retention: 'ਵਿਕਲਪਿਕ, ਮੂਲ ਰੂਪ ਵਿੱਚ ਬੰਦ', optionalRetention: true,
        instructions: ['ਪਿੱਠ ਨੂੰ ਸਹਿਜ ਅਤੇ ਸਿੱਧਾ ਰੱਖ ਕੇ ਆਰਾਮ ਨਾਲ ਬੈਠੋ।', 'ਅੱਖਾਂ ਬੰਦ ਕਰੋ ਅਤੇ ਆਮ ਸਾਹ ਲਓ।', 'ਸੱਜੇ ਅੰਗੂਠੇ ਨਾਲ ਸੱਜੀ ਨਾਸਿਕਾ ਹੌਲੀ ਬੰਦ ਕਰੋ।', 'ਖੱਬੀ ਨਾਸਿਕਾ ਰਾਹੀਂ ਹੌਲੀ ਸਾਹ ਅੰਦਰ ਲਓ।', 'ਅੰਗੂਠੀ ਵਾਲੀ ਉਂਗਲ ਨਾਲ ਖੱਬੀ ਨਾਸਿਕਾ ਬੰਦ ਕਰੋ।', 'ਸੱਜੀ ਨਾਸਿਕਾ ਖੋਲ੍ਹੋ ਅਤੇ ਸੱਜੇ ਪਾਸੇ ਰਾਹੀਂ ਹੌਲੀ ਸਾਹ ਬਾਹਰ ਛੱਡੋ।', 'ਸੱਜੇ ਪਾਸੇ ਰਾਹੀਂ ਸਾਹ ਅੰਦਰ ਲਓ।', 'ਸੱਜੀ ਨਾਸਿਕਾ ਬੰਦ ਕਰੋ।', 'ਖੱਬੀ ਨਾਸਿਕਾ ਖੋਲ੍ਹੋ ਅਤੇ ਖੱਬੇ ਪਾਸੇ ਰਾਹੀਂ ਸਾਹ ਬਾਹਰ ਛੱਡੋ।', 'ਇੱਕ ਚੱਕਰ ਪੂਰਾ ਹੋਇਆ।'],
        safety: 'ਹੌਲੀ ਅਤੇ ਸਹਿਜ ਸਾਹ ਲਓ। ਸਾਹ ਅੰਦਰ ਲੈਣ, ਬਾਹਰ ਛੱਡਣ ਜਾਂ ਰੋਕਣ ਲਈ ਜ਼ੋਰ ਨਾ ਪਾਓ।',
      },
      bhramari: {
        name: 'ਭ੍ਰਾਮਰੀ', subtitle: 'ਭੌਰੇ ਦੀ ਗੂੰਜ ਵਾਲਾ ਸਾਹ', category: 'ਸਹਿਜ',
        duration: '2–3 ਮਿੰਟ', beginnerGuidance: '5 ਵਾਰ', retention: 'ਨਹੀਂ', optionalRetention: false,
        instructions: ['ਆਰਾਮ ਨਾਲ ਬੈਠੋ ਅਤੇ ਅੱਖਾਂ ਬੰਦ ਕਰੋ।', 'ਨੱਕ ਰਾਹੀਂ ਹੌਲੀ ਸਾਹ ਅੰਦਰ ਲਓ।', 'ਮੂੰਹ ਨੂੰ ਹੌਲੀ ਜਿਹਾ ਬੰਦ ਰੱਖੋ।', 'ਹੌਲੀ ਸਾਹ ਬਾਹਰ ਛੱਡਦੇ ਹੋਏ ਨਰਮ “ੱਮੱਮ” ਦੀ ਗੂੰਜ ਕਰੋ।', 'ਹੌਲੀ ਕੰਪਨ ਮਹਿਸੂਸ ਕਰੋ।', 'ਸਾਹ ਬਾਹਰ ਛੱਡਣ ਤੋਂ ਬਾਅਦ ਆਮ ਸਾਹ ਲਓ।', 'ਸਹਿਜਤਾ ਨਾਲ ਦੁਹਰਾਓ।'],
        safety: 'ਗੂੰਜ ਨਰਮ ਅਤੇ ਸਹਿਜ ਰੱਖੋ। ਗਲੇ ਉੱਤੇ ਜ਼ੋਰ ਨਾ ਪਾਓ ਅਤੇ ਸਾਹ ਨਾ ਰੋਕੋ।',
      },
      ujjayi: {
        name: 'ਉੱਜਾਈ', subtitle: 'ਸਹਿਜ ਸਮੁੰਦਰੀ ਸਾਹ', category: 'ਸਹਿਜ',
        duration: '2–5 ਮਿੰਟ', beginnerGuidance: '5–10 ਸਾਹ', retention: 'ਵਿਕਲਪਿਕ, ਮੂਲ ਰੂਪ ਵਿੱਚ ਬੰਦ', optionalRetention: true,
        instructions: ['ਆਰਾਮ ਨਾਲ ਬੈਠੋ ਅਤੇ ਮੋਢਿਆਂ ਨੂੰ ਢਿੱਲਾ ਰੱਖੋ।', 'ਨੱਕ ਰਾਹੀਂ ਹੌਲੀ ਸਾਹ ਲਓ।', 'ਗਲੇ ਦੇ ਪਿਛਲੇ ਹਿੱਸੇ ਨੂੰ ਹੌਲੀ ਜਿਹਾ ਤੰਗ ਕਰੋ।', 'ਸਮੁੰਦਰ ਵਰਗੀ ਨਰਮ ਆਵਾਜ਼ ਆਉਣ ਦਿਓ।', 'ਸਾਹ ਨੂੰ ਹੌਲਾ ਅਤੇ ਸਹਿਜ ਰੱਖੋ।', 'ਸਿਰਫ਼ ਓਨੇ ਸਾਹ ਜਾਰੀ ਰੱਖੋ ਜਿੰਨੇ ਸਹਿਜ ਲੱਗਣ।'],
        safety: 'ਆਵਾਜ਼ ਹੌਲੀ ਅਤੇ ਸਹਿਜ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ। ਗਲੇ ਨੂੰ ਨਾ ਕੱਸੋ ਅਤੇ ਸਾਹ ਉੱਤੇ ਜ਼ੋਰ ਨਾ ਪਾਓ।',
      },
      kapalabhati: {
        name: 'ਕਪਾਲਭਾਤੀ', subtitle: 'ਸਰਗਰਮ ਸਾਹ ਛੱਡਣ ਦਾ ਅਭਿਆਸ', category: 'ਊਰਜਾਵਾਨ',
        duration: '1–2 ਚੱਕਰ', beginnerGuidance: '10–15 ਹੌਲੇ ਝਟਕੇ', rounds: '1–2', restBetweenRounds: '30–60 ਸਕਿੰਟ', retention: 'ਬੰਦ', optionalRetention: false,
        instructions: ['ਆਰਾਮ ਨਾਲ ਸਿੱਧੇ ਬੈਠੋ।', 'ਆਮ ਸਾਹ ਅੰਦਰ ਲਓ।', 'ਪੇਟ ਦੀਆਂ ਮਾਸਪੇਸ਼ੀਆਂ ਨਾਲ ਛੋਟਾ, ਸਰਗਰਮ ਸਾਹ ਬਾਹਰ ਛੱਡੋ।', 'ਸਾਹ ਆਪਣੇ ਆਪ ਅੰਦਰ ਆਉਣ ਦਿਓ।', 'ਸਹਿਜ ਰਫ਼ਤਾਰ ਨਾਲ ਦੁਹਰਾਓ।', 'ਚੱਕਰ ਰੋਕੋ ਅਤੇ ਆਮ ਸਾਹ ਲਓ।'],
        safety: 'ਇਹ ਵਧੇਰੇ ਊਰਜਾਵਾਨ ਸਾਹ ਦਾ ਅਭਿਆਸ ਹੈ। ਸਾਹ ਉੱਤੇ ਜ਼ੋਰ ਨਾ ਪਾਓ ਅਤੇ ਸਾਹ ਨਾ ਰੋਕੋ। ਚੱਕਰ, ਬੇਹੋਸ਼ੀ ਜਿਹਾ ਲੱਗਣਾ, ਸਾਹ ਚੜ੍ਹਨਾ ਜਾਂ ਬੇਆਰਾਮੀ ਹੋਵੇ ਤਾਂ ਰੁਕ ਜਾਓ।',
      },
      bhastrika: {
        name: 'ਭਸਤ੍ਰਿਕਾ', subtitle: 'ਧੌਂਕਣੀ ਵਰਗਾ ਸਾਹ', category: 'ਊਰਜਾਵਾਨ',
        duration: '1–2 ਚੱਕਰ', beginnerGuidance: '5–10 ਸਹਿਜ ਸਾਹ', rounds: '1–2', restBetweenRounds: '30–60 ਸਕਿੰਟ', retention: 'ਬੰਦ', optionalRetention: false,
        instructions: ['ਰੀੜ੍ਹ ਸਿੱਧੀ ਰੱਖ ਕੇ ਆਰਾਮ ਨਾਲ ਬੈਠੋ।', 'ਸਹਿਜ ਸਾਹ ਅੰਦਰ ਲਓ।', 'ਸਰਗਰਮੀ ਨਾਲ ਸਾਹ ਬਾਹਰ ਛੱਡੋ।', 'ਸਰਗਰਮੀ ਨਾਲ ਸਾਹ ਅੰਦਰ ਲਓ।', 'ਨਿਯੰਤਰਿਤ ਲੈਅ ਨਾਲ ਜਾਰੀ ਰੱਖੋ।', 'ਬੇਆਰਾਮੀ ਹੋਵੇ ਤਾਂ ਰੁਕੋ ਅਤੇ ਆਮ ਸਾਹ ਲਓ।'],
        safety: 'ਇਹ ਊਰਜਾਵਾਨ ਸਾਹ ਦਾ ਅਭਿਆਸ ਹੈ। ਸਾਹ ਉੱਤੇ ਜ਼ੋਰ ਨਾ ਪਾਓ ਅਤੇ ਸਾਹ ਨਾ ਰੋਕੋ। ਚੱਕਰ, ਬੇਹੋਸ਼ੀ ਜਿਹਾ ਲੱਗਣਾ, ਸਾਹ ਚੜ੍ਹਨਾ ਜਾਂ ਬੇਆਰਾਮੀ ਹੋਵੇ ਤਾਂ ਰੁਕ ਜਾਓ।',
      },
    },
  },
};

export const pranayamaOrder = ['nadi-shodhana', 'bhramari', 'ujjayi', 'kapalabhati', 'bhastrika'];

export const moodPranayama = {
  Calm: { primary: 'nadi-shodhana', alternative: 'ujjayi' },
  Okay: { primary: 'ujjayi', alternative: 'nadi-shodhana' },
  Restless: { primary: 'bhramari', alternative: 'nadi-shodhana' },
  Stressed: { primary: 'bhramari', alternative: 'nadi-shodhana' },
  Low: { primary: 'nadi-shodhana', alternative: 'ujjayi' },
};

export function getPranayamaCopy(language = 'en') {
  return copy[language] || copy.en;
}

export function getPranayamaPractice(id, language = 'en') {
  const content = getPranayamaCopy(language);
  return { id, ...content.practices[id] };
}

export function getMoodPranayama(mood, language = 'en') {
  const selection = moodPranayama[mood];
  if (!selection) return null;
  return {
    primary: getPranayamaPractice(selection.primary, language),
    alternative: getPranayamaPractice(selection.alternative, language),
  };
}

export function getPranayamaLibrary(language = 'en') {
  const content = getPranayamaCopy(language);
  return pranayamaOrder.map((id) => ({ id, ...content.practices[id] }));
}
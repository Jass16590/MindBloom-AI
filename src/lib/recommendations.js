const recommendations = {
  en: {
    Calm: {
      5: ['Mindful breathing', 'Since you selected Calm and have 5 minutes, mindful breathing is a gentle way to settle into the moment.'],
      10: ['Gratitude reflection', 'Since you selected Calm and have 10 minutes, a gratitude reflection gives you space to notice what feels meaningful.'],
      15: ['Mindful body awareness', 'Since you selected Calm and have 15 minutes, body awareness offers time to notice sensations without rushing.'],
      20: ['Extended mindfulness practice', 'Since you selected Calm and have 20 minutes, an extended practice lets you stay with the present at an easy pace.'],
    },
    Okay: {
      5: ['Short breathing reset', 'Since you selected Okay and have 5 minutes, a short breathing reset is an easy way to check in with yourself.'],
      10: ['Mindful observation', 'Since you selected Okay and have 10 minutes, mindful observation gives you time to notice what is here, without judgment.'],
      15: ['Guided relaxation', 'Since you selected Okay and have 15 minutes, guided relaxation offers a little more time to unwind at your own pace.'],
      20: ['Longer meditation', 'Since you selected Okay and have 20 minutes, a longer meditation gives you room to settle into a sustained practice.'],
    },
    Restless: {
      5: ['Five-senses grounding', 'Since you selected Restless and have 5 minutes, noticing the five senses can bring your attention to what is around you.'],
      10: ['Focused breathing', 'Since you selected Restless and have 10 minutes, focused breathing gives your attention one simple place to return to.'],
      15: ['Body scan', 'You selected Restless and have 15 minutes. A body scan can help you bring attention to different areas of the body.'],
      20: ['Extended grounding practice', 'Since you selected Restless and have 20 minutes, an extended grounding practice gives you time to explore the senses and surroundings.'],
    },
    Stressed: {
      5: ['5-Minute Reset', 'Since you selected Stressed and have 5 minutes, a short breathing reset is a good place to begin.'],
      10: ['Calming breathing exercise', 'Since you selected Stressed and have 10 minutes, a calming breathing exercise offers time to slow down and follow each breath.'],
      15: ['Relaxation and grounding', 'Since you selected Stressed and have 15 minutes, relaxation and grounding make room to soften and notice your surroundings.'],
      20: ['Extended calming practice', 'Since you selected Stressed and have 20 minutes, an extended calming practice gives you more time to pause without rushing.'],
    },
    Low: {
      5: ['Gentle breathing', 'Since you selected Low and have 5 minutes, gentle breathing offers a soft, unhurried place to begin.'],
      10: ['Self-compassion reflection', 'Since you selected Low and have 10 minutes, a self-compassion reflection offers time to respond to yourself with care.'],
      15: ['Gentle mindfulness practice', 'Since you selected Low and have 15 minutes, a gentle mindfulness practice lets you take things one moment at a time.'],
      20: ['Extended reflection and relaxation', 'Since you selected Low and have 20 minutes, extended reflection and relaxation leave room for a slower, softer pause.'],
    },
  },
  hi: {
    Calm: {
      5: ['सजग साँस', 'आपने शांत मन और 5 मिनट चुने हैं। सजग साँस इस पल में सहजता से ठहरने का एक सरल तरीका है।'],
      10: ['कृतज्ञता पर चिंतन', 'आपने शांत मन और 10 मिनट चुने हैं। कृतज्ञता पर चिंतन आपको अर्थपूर्ण बातों को देखने का समय देता है।'],
      15: ['शरीर के प्रति सजगता', 'आपने शांत मन और 15 मिनट चुने हैं। यह अभ्यास बिना जल्दबाज़ी के शरीर की संवेदनाओं को महसूस करने का समय देता है।'],
      20: ['विस्तृत माइंडफुलनेस अभ्यास', 'आपने शांत मन और 20 मिनट चुने हैं। यह विस्तृत अभ्यास सहज गति से वर्तमान पल में बने रहने का अवसर देता है।'],
    },
    Okay: {
      5: ['छोटा साँस विराम', 'आपने ठीक महसूस करना और 5 मिनट चुने हैं। छोटा साँस विराम स्वयं का हाल जानने का आसान तरीका है।'],
      10: ['सजग अवलोकन', 'आपने ठीक महसूस करना और 10 मिनट चुने हैं। सजग अवलोकन बिना निर्णय किए आसपास की बातों को देखने का समय देता है।'],
      15: ['निर्देशित विश्राम', 'आपने ठीक महसूस करना और 15 मिनट चुने हैं। निर्देशित विश्राम अपनी गति से थोड़ा ठहरने का समय देता है।'],
      20: ['लंबा ध्यान अभ्यास', 'आपने ठीक महसूस करना और 20 मिनट चुने हैं। लंबा ध्यान अभ्यास आपको धीरे-धीरे मन को स्थिर करने की जगह देता है।'],
    },
    Restless: {
      5: ['पाँच इंद्रियों से जुड़ाव', 'आपने बेचैनी और 5 मिनट चुने हैं। पाँच इंद्रियों पर ध्यान आसपास की चीज़ों से जुड़ने में मदद कर सकता है।'],
      10: ['एकाग्र साँस', 'आपने बेचैनी और 10 मिनट चुने हैं। एकाग्र साँस ध्यान को लौटने के लिए एक सरल आधार देती है।'],
      15: ['बॉडी स्कैन', 'आपने बेचैनी और 15 मिनट चुने हैं। बॉडी स्कैन शरीर के अलग-अलग हिस्सों पर ध्यान लाने में मदद कर सकता है।'],
      20: ['विस्तृत ग्राउंडिंग अभ्यास', 'आपने बेचैनी और 20 मिनट चुने हैं। यह अभ्यास इंद्रियों और आसपास के माहौल को देखने के लिए समय देता है।'],
    },
    Stressed: {
      5: ['5 मिनट का विराम', 'आपने तनाव और 5 मिनट चुने हैं। साँस का एक छोटा विराम शुरू करने के लिए अच्छी जगह है।'],
      10: ['शांत करने वाला साँस अभ्यास', 'आपने तनाव और 10 मिनट चुने हैं। यह अभ्यास हर साँस पर ध्यान देते हुए धीमा होने का समय देता है।'],
      15: ['विश्राम और ग्राउंडिंग', 'आपने तनाव और 15 मिनट चुने हैं। विश्राम और ग्राउंडिंग सहज होने और आसपास को महसूस करने की जगह देते हैं।'],
      20: ['विस्तृत शांत अभ्यास', 'आपने तनाव और 20 मिनट चुने हैं। यह विस्तृत अभ्यास बिना जल्दबाज़ी के ठहरने के लिए अधिक समय देता है।'],
    },
    Low: {
      5: ['कोमल साँस अभ्यास', 'आपने उदासी और 5 मिनट चुने हैं। कोमल साँस अभ्यास धीरे से शुरू करने की जगह देता है।'],
      10: ['आत्म-करुणा पर चिंतन', 'आपने उदासी और 10 मिनट चुने हैं। यह चिंतन स्वयं के प्रति दयालु होने का समय देता है।'],
      15: ['कोमल माइंडफुलनेस अभ्यास', 'आपने उदासी और 15 मिनट चुने हैं। यह अभ्यास हर पल को धीरे-धीरे लेने का अवसर देता है।'],
      20: ['विस्तृत चिंतन और विश्राम', 'आपने उदासी और 20 मिनट चुने हैं। यह अभ्यास धीमे और सहज विराम के लिए समय देता है।'],
    },
  },
  pa: {
    Calm: {
      5: ['ਸੁਚੇਤ ਸਾਹ', 'ਤੁਸੀਂ ਸ਼ਾਂਤ ਮਨ ਅਤੇ 5 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਸੁਚੇਤ ਸਾਹ ਇਸ ਪਲ ਵਿੱਚ ਸਹਿਜ ਹੋਣ ਦਾ ਇੱਕ ਸੌਖਾ ਤਰੀਕਾ ਹੈ।'],
      10: ['ਸ਼ੁਕਰਾਨੇ ਬਾਰੇ ਚਿੰਤਨ', 'ਤੁਸੀਂ ਸ਼ਾਂਤ ਮਨ ਅਤੇ 10 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਸ਼ੁਕਰਾਨੇ ਬਾਰੇ ਚਿੰਤਨ ਅਹਿਮ ਗੱਲਾਂ ਨੂੰ ਦੇਖਣ ਲਈ ਸਮਾਂ ਦਿੰਦਾ ਹੈ।'],
      15: ['ਸਰੀਰ ਪ੍ਰਤੀ ਸਜਗਤਾ', 'ਤੁਸੀਂ ਸ਼ਾਂਤ ਮਨ ਅਤੇ 15 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਇਹ ਅਭਿਆਸ ਬਿਨਾਂ ਕਾਹਲੀ ਸਰੀਰ ਦੀਆਂ ਸੰਵੇਦਨਾਵਾਂ ਵੱਲ ਧਿਆਨ ਦੇਣ ਦਾ ਸਮਾਂ ਦਿੰਦਾ ਹੈ।'],
      20: ['ਵਿਸਤ੍ਰਿਤ ਮਾਈਂਡਫੁਲਨੈੱਸ ਅਭਿਆਸ', 'ਤੁਸੀਂ ਸ਼ਾਂਤ ਮਨ ਅਤੇ 20 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਇਹ ਅਭਿਆਸ ਸਹਿਜ ਰਫ਼ਤਾਰ ਨਾਲ ਮੌਜੂਦਾ ਪਲ ਵਿੱਚ ਰਹਿਣ ਦਾ ਮੌਕਾ ਦਿੰਦਾ ਹੈ।'],
    },
    Okay: {
      5: ['ਛੋਟਾ ਸਾਹ ਵਿਰਾਮ', 'ਤੁਸੀਂ ਠੀਕ ਮਹਿਸੂਸ ਕਰਨਾ ਅਤੇ 5 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਛੋਟਾ ਸਾਹ ਵਿਰਾਮ ਆਪਣਾ ਹਾਲ ਜਾਣਨ ਦਾ ਸੌਖਾ ਤਰੀਕਾ ਹੈ।'],
      10: ['ਸੁਚੇਤ ਨਿਰੀਖਣ', 'ਤੁਸੀਂ ਠੀਕ ਮਹਿਸੂਸ ਕਰਨਾ ਅਤੇ 10 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਸੁਚੇਤ ਨਿਰੀਖਣ ਬਿਨਾਂ ਪਰਖੇ ਆਲੇ-ਦੁਆਲੇ ਵੱਲ ਧਿਆਨ ਦੇਣ ਦਾ ਸਮਾਂ ਦਿੰਦਾ ਹੈ।'],
      15: ['ਰਾਹ-ਦਰਸਾਇਆ ਆਰਾਮ', 'ਤੁਸੀਂ ਠੀਕ ਮਹਿਸੂਸ ਕਰਨਾ ਅਤੇ 15 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਇਹ ਅਭਿਆਸ ਆਪਣੀ ਰਫ਼ਤਾਰ ਨਾਲ ਠਹਿਰਨ ਲਈ ਸਮਾਂ ਦਿੰਦਾ ਹੈ।'],
      20: ['ਲੰਮਾ ਧਿਆਨ ਅਭਿਆਸ', 'ਤੁਸੀਂ ਠੀਕ ਮਹਿਸੂਸ ਕਰਨਾ ਅਤੇ 20 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਲੰਮਾ ਧਿਆਨ ਅਭਿਆਸ ਹੌਲੀ-ਹੌਲੀ ਮਨ ਨੂੰ ਟਿਕਾਉਣ ਦੀ ਥਾਂ ਦਿੰਦਾ ਹੈ।'],
    },
    Restless: {
      5: ['ਪੰਜ ਇੰਦਰੀਆਂ ਨਾਲ ਜੁੜਾਅ', 'ਤੁਸੀਂ ਬੇਚੈਨੀ ਅਤੇ 5 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਪੰਜ ਇੰਦਰੀਆਂ ਵੱਲ ਧਿਆਨ ਆਲੇ-ਦੁਆਲੇ ਨਾਲ ਜੁੜਨ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹੈ।'],
      10: ['ਕੇਂਦਰਿਤ ਸਾਹ', 'ਤੁਸੀਂ ਬੇਚੈਨੀ ਅਤੇ 10 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਕੇਂਦਰਿਤ ਸਾਹ ਧਿਆਨ ਨੂੰ ਵਾਪਸ ਲਿਆਉਣ ਲਈ ਇੱਕ ਸੌਖਾ ਆਧਾਰ ਦਿੰਦਾ ਹੈ।'],
      15: ['ਬਾਡੀ ਸਕੈਨ', 'ਤੁਸੀਂ ਬੇਚੈਨੀ ਅਤੇ 15 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਬਾਡੀ ਸਕੈਨ ਸਰੀਰ ਦੇ ਵੱਖ-ਵੱਖ ਹਿੱਸਿਆਂ ਵੱਲ ਧਿਆਨ ਲਿਆਉਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹੈ।'],
      20: ['ਵਿਸਤ੍ਰਿਤ ਗ੍ਰਾਊਂਡਿੰਗ ਅਭਿਆਸ', 'ਤੁਸੀਂ ਬੇਚੈਨੀ ਅਤੇ 20 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਇਹ ਅਭਿਆਸ ਇੰਦਰੀਆਂ ਅਤੇ ਆਲੇ-ਦੁਆਲੇ ਵੱਲ ਧਿਆਨ ਦੇਣ ਦਾ ਸਮਾਂ ਦਿੰਦਾ ਹੈ।'],
    },
    Stressed: {
      5: ['5 ਮਿੰਟ ਦਾ ਵਿਰਾਮ', 'ਤੁਸੀਂ ਤਣਾਅ ਅਤੇ 5 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਸਾਹ ਦਾ ਇੱਕ ਛੋਟਾ ਵਿਰਾਮ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਚੰਗੀ ਥਾਂ ਹੈ।'],
      10: ['ਸ਼ਾਂਤ ਕਰਨ ਵਾਲਾ ਸਾਹ ਅਭਿਆਸ', 'ਤੁਸੀਂ ਤਣਾਅ ਅਤੇ 10 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਇਹ ਅਭਿਆਸ ਹਰ ਸਾਹ ਵੱਲ ਧਿਆਨ ਦੇ ਕੇ ਹੌਲੀ ਹੋਣ ਦਾ ਸਮਾਂ ਦਿੰਦਾ ਹੈ।'],
      15: ['ਆਰਾਮ ਅਤੇ ਗ੍ਰਾਊਂਡਿੰਗ', 'ਤੁਸੀਂ ਤਣਾਅ ਅਤੇ 15 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਆਰਾਮ ਅਤੇ ਗ੍ਰਾਊਂਡਿੰਗ ਸਹਿਜ ਹੋਣ ਅਤੇ ਆਲੇ-ਦੁਆਲੇ ਨੂੰ ਮਹਿਸੂਸ ਕਰਨ ਦੀ ਥਾਂ ਦਿੰਦੇ ਹਨ।'],
      20: ['ਵਿਸਤ੍ਰਿਤ ਸ਼ਾਂਤ ਅਭਿਆਸ', 'ਤੁਸੀਂ ਤਣਾਅ ਅਤੇ 20 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਇਹ ਅਭਿਆਸ ਬਿਨਾਂ ਕਾਹਲੀ ਠਹਿਰਨ ਲਈ ਹੋਰ ਸਮਾਂ ਦਿੰਦਾ ਹੈ।'],
    },
    Low: {
      5: ['ਨਰਮ ਸਾਹ ਅਭਿਆਸ', 'ਤੁਸੀਂ ਉਦਾਸੀ ਅਤੇ 5 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਨਰਮ ਸਾਹ ਅਭਿਆਸ ਹੌਲੀ ਜਿਹੀ ਸ਼ੁਰੂਆਤ ਕਰਨ ਦੀ ਥਾਂ ਦਿੰਦਾ ਹੈ।'],
      10: ['ਆਪਣੇ ਪ੍ਰਤੀ ਦਇਆ ਬਾਰੇ ਚਿੰਤਨ', 'ਤੁਸੀਂ ਉਦਾਸੀ ਅਤੇ 10 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਇਹ ਚਿੰਤਨ ਆਪਣੇ ਨਾਲ ਦਇਆ ਨਾਲ ਪੇਸ਼ ਆਉਣ ਲਈ ਸਮਾਂ ਦਿੰਦਾ ਹੈ।'],
      15: ['ਨਰਮ ਮਾਈਂਡਫੁਲਨੈੱਸ ਅਭਿਆਸ', 'ਤੁਸੀਂ ਉਦਾਸੀ ਅਤੇ 15 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਇਹ ਅਭਿਆਸ ਹਰ ਪਲ ਨੂੰ ਹੌਲੀ-ਹੌਲੀ ਲੈਣ ਦਾ ਮੌਕਾ ਦਿੰਦਾ ਹੈ।'],
      20: ['ਵਿਸਤ੍ਰਿਤ ਚਿੰਤਨ ਅਤੇ ਆਰਾਮ', 'ਤੁਸੀਂ ਉਦਾਸੀ ਅਤੇ 20 ਮਿੰਟ ਚੁਣੇ ਹਨ। ਇਹ ਅਭਿਆਸ ਹੌਲੇ ਅਤੇ ਸਹਿਜ ਵਿਰਾਮ ਲਈ ਸਮਾਂ ਦਿੰਦਾ ਹੈ।'],
    },
  },
};

const activityIds = {
  Calm: { 5: 'mindful-breathing', 10: 'gratitude-reflection', 15: 'body-awareness', 20: 'extended-mindfulness' },
  Okay: { 5: 'short-breathing-reset', 10: 'mindful-observation', 15: 'guided-relaxation', 20: 'longer-meditation' },
  Restless: { 5: 'five-senses-grounding', 10: 'focused-breathing', 15: 'body-scan', 20: 'extended-grounding' },
  Stressed: { 5: 'five-minute-reset', 10: 'calming-breathing', 15: 'relaxation-grounding', 20: 'extended-calming' },
  Low: { 5: 'gentle-breathing', 10: 'self-compassion-reflection', 15: 'gentle-mindfulness', 20: 'extended-reflection-relaxation' },
};

export function getRecommendation(language, mood, minutes) {
  const selected = recommendations[language]?.[mood]?.[minutes]
    || recommendations.en[mood]?.[minutes]
    || recommendations.en.Okay[5];
  return {
    id: activityIds[mood]?.[minutes] || activityIds.Okay[5],
    title: selected[0],
    detail: selected[1],
    minutes,
  };
}
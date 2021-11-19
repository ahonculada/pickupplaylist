import spacy

nlp = spacy.load("en_core_web_sm")

text = ("When Sebastian Thrun started working on self-driving cars at "
        "Google in 2007, few people outside of the company took him "
        "seriously. “I can tell you very senior CEOs of major American "
        "car companies would shake my hand and turn away because I wasn’t "
        "worth talking to,” said Thrun, in an interview with Recode earlier "
        "this week.")

doc = nlp(text)

print("Part of Speech Tagging")
print(f"Noun Phrases: {[chunk.text for chunk in doc.noun_chunks]}")
print(f"Verbs: {[token.lemma_ for token in doc if token.pos_ == 'VERB' ]} ")

print("Named Entity Recognition")
for entity in doc.ents:
    print(entity.text, entity.label_)



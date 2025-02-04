from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("resume.html", 
        name="Your Name", 
        skills=["Python", "Linux", "Networking"],
        skill_percentages={"Python": 90, "Linux": 85, "Networking": 80},
        experience=[
            {"role": "System Administrator", "duration": "11/2022 – Present", "description": "Led the design and implementation of high-availability local server environments..."},
            {"role": "Senior Network Administrator", "duration": "09/2021 – 11/2022", "description": "Oversaw the technical design, planning, and maintenance of network infrastructure..."}
        ]
    )

if __name__ == "__main__":
    app.run(debug=True)

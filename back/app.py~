from flask import Flask,jsonify,abort,make_response,request

app = Flask(__name__)

data= [{
    'id':1,
    'name':'sayed',
    'last_name':'hamdi',
    'job':'student'
    }]

@app.route('/api/students',methods=["GET"])
def students():
    return jsonify(data)

#GET Method
@app.route('/api/students/<int:student_id>',methods=["GET"])
def get_student(student_id):
    student = [student for student in data if student['id']==student_id]
    if len(student)==0:
        abort(404)
    return jsonify({'student':student[0]})

#POST MEthod
@app.route('/api/students',methods=["POST"])
def add_student():
    if not request.json or not 'name' in request.json:
        abort(400)
    if len(data)<=0:
        idd=0
    else:
        idd = data[-1]['id']+1
    student = {
            'id': idd,
            'name':request.json['name'],
            'last_name':request.json['last_name'],
            'job':request.json['job']
            }
    data.append(student)
    return jsonify({'student':student}), 201

#PUT method
@app.route('/api/students/<int:student_id>',methods=['PUT'])
def edit_student(student_id):
    if not request.json or not 'name' in request.json:
        abort(400)
    for student in data :
        if student['id']==student_id:
            student["name"]=request.json['name']
            student["last_name"]=request.json["last_name"]
            student["job"]=request.json["job"]
            stud = student
    return jsonify({'student':stud}),202 

#DELETE Method by stuent id
@app.route('/api/students/<int:student_id>',methods=["DELETE"])
def delete_student(student_id):
    for student in data:
        if student['id']==student_id:
            data.remove(student)
            message = 'student with id '
            return jsonify({'message':message}),203
    return jsonify({'message':'stiudent not found'}),303
            


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

if __name__ == '__main__':
    app.run(host="0.0.0.0")
    

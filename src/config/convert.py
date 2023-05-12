import os


def convert_js_to_py(directory: str):
    for filename in os.listdir(directory):
        if filename.endswith('.js'):
            with open(os.path.join(directory, filename), 'r') as js_file:
                # Read JavaScript file contents
                js_code = js_file.read()

                # Convert JavaScript code to Python code
                py_code = convert_js_to_py_code(js_code)

                # Write Python code to file
                py_filename = filename[:-3] + '.py'
                with open(os.path.join(directory, py_filename), 'w') as py_file:
                    py_file.write(py_code)


def convert_js_to_py_code(js_code: str):
    # Replace JavaScript-specific code patterns with their Python equivalent
    py_code = js_code.replace('const ', '').replace(
        'let ', '').replace('export ', '').replace(';', '').replace('`', '"""').replace('}', '').replace(' {', '')
    py_code = py_code.replace(
        'for (i = 0 i < paragraphs.length i++)', 'for i in paragraphs:')
    py_code = py_code.replace('paragraphs[i]', 'i')

    return py_code


convert_js_to_py("./blogContent")

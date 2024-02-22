import os

directory = "directory"

with open("html_code.txt", "w") as file:
    for filename in os.listdir(directory):
        if os.path.isfile(os.path.join(directory, filename)):
            file.write(
                f"""<img src="assets/memes/{filename}" class="my-4 w-100 bg-dark rounded p-4"/>\n"""
            )

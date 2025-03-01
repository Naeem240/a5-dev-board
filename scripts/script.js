const completedButtons = document.getElementsByClassName("btn-completed");

for (let i = 0; i < completedButtons.length; i++) {
    completedButtons[i].addEventListener("click", function () {
        // console.log('Clicked');
        completedButtons[i].disabled = true;
        const taskCount = parseInt(document.getElementById('task-count').innerText);
        // console.log(taskCount);
        document.getElementById('task-count').innerText = taskCount - 1;
        const taskName = document.getElementsByClassName('task-name')[i].innerText;
        // console.log(taskName);
        const completedTask = document.createElement('p');
        const text = 'You Have completed the task'
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const formattedTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
        console.log(formattedTime);
        completedTask.innerText = text + ' ' + '"' + taskName + '"' + ' ' + 'at' + ' ' + formattedTime;
        document.getElementById('task-list').appendChild(completedTask);
    });
    document.getElementById('clear-history').addEventListener('click', function(){
        document.getElementById('task-list').innerHTML = '';
        document.getElementById('task-count').innerText = 6;

        completedButtons[i].disabled = false;

        
    })
}

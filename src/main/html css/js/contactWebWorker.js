function workerUpdate() {
    postMessage("validate inputs");
    setTimeout("workerUpdate()", 50);
}

workerUpdate();
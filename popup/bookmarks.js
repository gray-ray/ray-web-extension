// 书签管理

let treeData =[]

function renderTree(tree=[], wrap) {
  const ul = document.createElement('ul');

  ul.classList.add('list-group');

  tree.forEach(o => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'bookmarkItem');

    li.setAttribute('id',o?.id);

    li.setAttribute('data-parentId', o?.parentId);
    li.setAttribute('data-itemId', o?.id);
   

    if(o?.children?.length>= 0) {
      li.textContent = o.title;
      renderTree(o?.children, li);

    }
    if(!o?.children){
      li.classList.add('noChild');

      const ae = document.createElement('a');

      ae.href = o?.url;
      ae.textContent = o.title;

      ae?.setAttribute('target','_blank');

      li.appendChild(ae)
    }

    ul.appendChild(li);
  
  })

  wrap.appendChild(ul);

};

chrome.bookmarks.getTree((tree) => {
  treeData = tree[0]?.children;
  chrome.runtime.sendMessage({ type: 'log',content: treeData });
  renderTree(treeData, document.getElementById('listWrap'))
});


const callback = (event) =>{
  chrome.runtime.sendMessage({ type: 'log',content: event?.target?.innerText });

  const lis = document.querySelectorAll('li.noChild');

  lis?.forEach(o => {
    // o.classList.remove("active");
    // o?.setAttribute('aria-current', false);
  })

  if(event?.target?.classList.contains('noChild')) {

    // event?.target?.classList.add("active");
  
    // event?.target?.setAttribute('aria-current', true); 
  }
};

document.getElementById('listWrap').addEventListener('click', callback);


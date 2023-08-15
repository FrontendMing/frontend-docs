# ResizeObserver：监测DOM节点的变化


## 引言

众所周知 window.resize 事件能帮我们监听窗口大小的变化。但是 reize 事件会在一秒内触发将近60次，所以很容易在改变窗口大小时导致性能问题。  
换句话说，window.resize 事件通常是浪费的，因为它会监听每个元素的大小变化（只有 window 对象才有 resize 事件），而不是具体到某个元素的变化。如果我们只想监听某个元素的变化的话，这种操作就很浪费性能了。  
  
而ResizeObserver API就可以帮助我们：监听一个DOM节点的变化，这种变化包括但不仅限于：

1、某个节点的出现和隐藏  
2、某个节点的大小变化
# Concurrency in Rust

---

<!-- ### **7. 新增 `concurrency.md`** -->
📄 `my-rust-book/src/concurrency.md`
```md
# Concurrency in Rust

Rust makes concurrency safer with **ownership and borrowing**.

## Threads in Rust

Creating a thread in Rust:

```rust
use std::thread;
use std::time::Duration;

fn main() {
    let handle = thread::spawn(|| {
        for i in 1..5 {
            println!("Thread says: {}", i);
            thread::sleep(Duration::from_millis(500));
        }
    });

    handle.join().unwrap();
}

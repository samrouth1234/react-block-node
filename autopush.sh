git add .
read -p "Please enter your commit message: " m
git commit -m "$m"
read -p "Please enter your branch: " branch
git push origin "$branch"
